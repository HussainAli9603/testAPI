import { Schema, model, Mongoose } from 'mongoose';
import { IWaiter } from '../types/document/IWaiter';
const IWaiterSchema = new Schema(
    {
        fullName: { type: String },
        contactNumber: { type: String },
        email: { type: String },
        password: { type: String },
        address: { type: String },
        description: { type: String },
    },
    { timestamps: true }
);
export const WaiterSchema = model<IWaiter>('WaiterSchema', IWaiterSchema);