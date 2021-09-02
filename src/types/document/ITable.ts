import { Document } from 'mongoose';
export interface ITable extends Document {
    _id: string;
    tableNumber: string;
    totalPerson: number;
    createdAt?: string;
    updatedAt?: string;
}