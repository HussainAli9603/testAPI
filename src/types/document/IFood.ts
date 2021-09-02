import { Document } from 'mongoose';
export interface IFood extends Document {
    _id: string;
    name: string;
    price: string;
    type: string;
    size: string;
    createdAt?: string;
    updatedAt?: string;
}