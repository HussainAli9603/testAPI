import express from 'express';
import { AdminRoutesApi } from "./Admin.Routes";
import { WaiterRoutesApi } from "./Waiter.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/admin', AdminRoutesApi);
        this.router.use('/waiter', WaiterRoutesApi);

    }


}
export const MainApi = new MainRouter().router;