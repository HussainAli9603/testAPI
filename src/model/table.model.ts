import { Schema, model, Mongoose } from 'mongoose';
import { ITable } from '../types/document/ITable';
const ITableSchema = new Schema(
    {
        tableNumber: { type: String },
        totalPerson: { type: Number },
    },
    { timestamps: true }
);
export const TableSchema = model<ITable>('TableSchema', ITableSchema);