import { IFood } from '../types/document/IFood';
import { MainAdmin } from '../repositories/Admin.repositorie';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { SaveUpdateResFood, ResWaiter, ResTable, ResOrder } from '../types/response/Admin.response';
import { ReqFood, ReqOrder, ReqTable, ReqWaiter, ReqWaiterOrderById, ReqGetOrder, ReqLoginWaiter, ReqDeleteFood } from '../types/request/Admin.request';
import { IWaiter } from '../types/document/IWaiter';
import { ITable } from '../types/document/ITable';
import { IOrder } from '../types/document/IOrder';

@Route('admin')
@Tags('admin')
export class AdminController {
  constructor() { }

  @Security("api_key")
  @Post("/add/food")
  async SaveFood(@Body() getreq: ReqFood): Promise<SaveUpdateResFood> {
    const food: any = await new MainAdmin().addFood(<IFood>(getreq));
    return <SaveUpdateResFood>food;
  }
  @Security("api_key")
  @Delete("/delete/food")
  async DeleteFood(@Body() getreq: ReqDeleteFood): Promise<SaveUpdateResFood> {
    const food: any = await new MainAdmin().deleteFood(getreq._id);
    return <SaveUpdateResFood>food;
  }

  @Security("api_key")
  @Post("/add/waiter")
  async SaveWaiter(@Body() getreq: ReqWaiter): Promise<ResWaiter> {
    const food: any = await new MainAdmin().addWaiter(<IWaiter>(getreq));
    return <ResWaiter>food;
  }

  @Security("api_key")
  @Post("/add/table")
  async SaveTable(@Body() getreq: ReqTable): Promise<ResTable> {
    const table: any = await new MainAdmin().addTable(<ITable>(getreq));
    return <ResTable>table;
  }

  @Security("api_key")
  @Get("/all/order")
  async allOrder(): Promise<ResOrder> {
    const allorder: any = await new MainAdmin().getAllOrder();
    return <ResOrder>allorder;
  }

  @Security("api_key")
  @Put("/update/order")
  async OrderUpdate(@Body() getreq: ReqGetOrder): Promise<ResOrder> {
    const getorder: any = await new MainAdmin().getOrder(getreq._id);
    return <ResOrder>getorder;
  }

  @Security("api_key")
  @Get("/all/waiter")
  async allWaiter(): Promise<ResWaiter> {
    const allwaiter: any = await new MainAdmin().getAllWaiter();
    return <ResWaiter>allwaiter;
  }




}

