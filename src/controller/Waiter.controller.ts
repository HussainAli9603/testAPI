import { MainAdmin } from '../repositories/Admin.repositorie';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request } from "tsoa";
import { ResWaiter, ResOrder } from '../types/response/Admin.response';
import { ReqOrder, ReqWaiterOrderById, ReqLoginWaiter } from '../types/request/Admin.request';
import { IWaiter } from '../types/document/IWaiter';
import { IOrder } from '../types/document/IOrder';

@Route('waiter')
@Tags('waiter')
export class WaiterController {
    constructor() { }

    @Post('/waiter/login')
    async loginWaiterEmail(@Body() loginEmail: ReqLoginWaiter): Promise<ResWaiter> {
        const login_waiter: any = await new MainAdmin().WaiterEmailFind(<IWaiter>(loginEmail));
        return <ResWaiter>(login_waiter)
    }

    @Post("/add/order")
    async SaveOrder(@Body() getreq: ReqOrder): Promise<ResOrder> {
        const order: any = await new MainAdmin().addOrder(<IOrder>(getreq));
        return <ResOrder>order;
    }

    @Post("/get/waiter-order")
    async waiterOrder(@Body() getreq: ReqWaiterOrderById): Promise<ResOrder> {
        const allwaiterorder: any = await new MainAdmin().getWaiterOrder(getreq._id);
        return <ResOrder>allwaiterorder;
    }







}