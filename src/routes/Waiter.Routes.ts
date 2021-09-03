import express from 'express';
import { WaiterController } from '../controller/Waiter.controller';
import { ResTable, ResWaiter, SaveUpdateResFood } from '../types/response/Admin.response';
import { ReqOrder } from '../types/request/Admin.request';
import CustomeError from '../utills/error';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import { checkJwtToken } from '../middleware/checkJwtToken';
import apikeyauths from '../middleware/checkApikey';

export class WaiterRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {

        this.router.post('/add/order',checkJwtToken , async (req, res, next) => {
            try {
                const getreqs: ReqOrder = req.body;
                const Order: any = await new WaiterController().SaveOrder(getreqs);
                res.status(200).send({ Success: true, message: "Order add successfully", order: Order });
            } catch (error) {
                next(error);
            }
        });

        this.router.post('/get/waiter-order',checkJwtToken , async (req, res, next) => {
            try {
                const getReq: any = req.body;
                console.log(getReq)
                const allwaiterOrder: any = await new WaiterController().waiterOrder(getReq);
                res.status(200).send({ Success: true, message: "Get All Waiter Order", waiterOrder: allwaiterOrder });
            } catch (error) {
                next(error);
            }
        });


        this.router.post('/waiter/login', async (req, res, next) => {
            try {
                const waiter: any = {
                    email: req.body.email
                }
                const userDoc: any = await new WaiterController().loginWaiterEmail(waiter);
                if (!userDoc) {
                    res.status(200).json("Waiter Not Found");
                } else {
                    const isPasswordValid = await bcrypt.compare(req.body.password, userDoc.password, (err, match) => {
                        if (match) {
                            const token = jwt.sign({ email: userDoc.email }, secret);
                            res.status(200).send({ token: token, waiter: userDoc });
                        } else {
                            res.status(200).json("Password Incorrect");
                        }
                    });
                }
            } catch (error) {
                next(error)
            }
        })




    }
}
export const WaiterRoutesApi = new WaiterRoutes().router;


// mongodb+srv://${dbUser}:${dbPass}@cluster0.ifcrw.mongodb.net/schoolmanagement?retryWrites=true&w=majority
