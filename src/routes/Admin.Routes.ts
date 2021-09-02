import express from 'express';
import { AdminController } from '../controller/Admin.controller';
import { IFood } from '../types/document/IFood';
import { ResTable, ResWaiter, SaveUpdateResFood } from '../types/response/Admin.response';
import { ReqFood, ReqOrder, ReqTable, ReqWaiter, ReqWaiterOrderById } from '../types/request/Admin.request';
import CustomeError from '../utills/error';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import { checkJwtToken } from '../middleware/checkJwtToken';
import apikeyauths from '../middleware/checkApikey';

export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/add/food', apikeyauths, async (req, res, next) => {
      try {
        const getreq: ReqFood = req.body;
        const food: SaveUpdateResFood = await new AdminController().SaveFood(getreq);
        res.status(200).send({ Success: true, message: "Food add successfully", food: food });
      } catch (error) {
        next(error);
      }
    });

    this.router.delete('/delete/food', apikeyauths, async (req, res, next) => {
      const del: any = req.body;
      const delProduct: any = await new AdminController().DeleteFood(del)
      if (delProduct) {
        res.status(200).json("delete")
      } else {
        res.status(404).json("Patient Not Found")
      }
    });


    this.router.post('/add/waiter', apikeyauths, async (req, res, next) => {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const getreq: ReqWaiter = {
          fullName: req.body.fullName,
          contactNumber: req.body.contactNumber,
          email: req.body.email,
          password: hash,
          address: req.body.address,
          description: req.body.description,
        }
        const waiter: ResWaiter = await new AdminController().SaveWaiter(getreq);
        res.status(200).send({ Success: true, message: "Waiter add successfully", waiter: waiter });
      } catch (error) {
        next(error);
      }
    });

    this.router.post('/add/table', apikeyauths, async (req, res, next) => {
      try {
        const getreqs: ReqTable = req.body;
        const table: any = await new AdminController().SaveTable(getreqs);
        res.status(200).send({ Success: true, message: "Table add successfully", table: table });
      } catch (error) {
        next(error);
      }
    });


    this.router.get('/all/order', apikeyauths, async (req, res, next) => {
      try {
        const allOrder: any = await new AdminController().allOrder();
        res.status(200).send({ Success: true, message: "Get All Order", AllOrder: allOrder });
      } catch (error) {
        next(error);
      }
    });

    this.router.put('/update/order', apikeyauths, async (req, res, next) => {
      try {
        const getReq: any = req.body;
        const getOrder: any = await new AdminController().OrderUpdate(getReq);
        if (getOrder) {
          getOrder.time = req.body.time;
          getOrder.acceptORpending = req.body.acceptORpending;
          getOrder.save();
          res.status(200).send({ Success: true, message: "Order Update Successfully", updateOrder: getOrder });
        } else {
          res.status(200).json("error")
        }

      } catch (error) {
        next(error);
      }
    });


    this.router.get('/all/waiter', async (req, res, next) => {
      try {
        const allwaiter: any = await new AdminController().allWaiter();
        res.status(200).send({ Success: true, message: "Get All Waiter", allWaiter: allwaiter });
      } catch (error) {
        next(error);
      }
    });



  }
}
export const AdminRoutesApi = new AdminRoutes().router;
