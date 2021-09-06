import { FoodSchema } from '../model/food.model';
import { IFood } from '../types/document/IFood';
import { WaiterSchema } from '../model/waiter.model';
import { TableSchema } from '../model/table.model';
import { OrderSchema } from '../model/order.model';
import { IWaiter } from '../types/document/IWaiter';
import { ITable } from '../types/document/ITable';
import { IOrder } from '../types/document/IOrder';
import { ReqWaiterOrderById } from '../types/Request/Admin.request';

export class MainAdmin {
  constructor() { }

  addFood(Food: IFood) {
    return new FoodSchema(Food).save();
  }

  addWaiter(Waiter: IWaiter) {
    return new WaiterSchema(Waiter).save();
  }

  addTable(Table: ITable) {
    return new TableSchema(Table).save();
  }

  addOrder(Order: IOrder) {
    return new OrderSchema(Order).save();
  }

  getAllOrder() {
    return OrderSchema.find().populate("foodId").populate("tableNumberId").populate("waiterId");
  }

  getWaiterOrder(id: string) {
    console.log(id)
    return OrderSchema.find({ waiterId: id }).populate("foodId").populate("tableNumberId").populate("waiterId");
  }

  getOrder(id: string) {
    return OrderSchema.findById(id);
  }

  WaiterEmailFind(email: any) {
    return WaiterSchema.findOne(email);
  }

  deleteFood(id: string) {
    return FoodSchema.findByIdAndDelete(id);
  }

  getAllWaiter() {
    return WaiterSchema.find();
  }
  getAllFood() {
    return FoodSchema.find();
  }


}
