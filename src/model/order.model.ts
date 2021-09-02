import { Schema, model, Mongoose } from 'mongoose';
import { IOrder } from '../types/document/IOrder';
const IOrderSchema = new Schema(
    {
        waiterId: { type: Schema.Types.ObjectId, ref: "WaiterSchema" },
        foodId: [{ type: Schema.Types.ObjectId, ref: "FoodSchema" }],
        fullName: { type: String },
        contactNumber: { type: String },
        address: { type: String },
        tableNumberId: { type: Schema.Types.ObjectId, ref: "TableSchema" },
        time: { type: String, default: 0 },
        acceptORpending: { type: String, default: "Pending" },
        totalBill: { type: String },

    },
    { timestamps: true }
);
export const OrderSchema = model<IOrder>('OrderSchema', IOrderSchema);