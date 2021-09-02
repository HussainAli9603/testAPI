import { Document } from 'mongoose';
export interface IWaiter extends Document {
    _id: string;
    fullName: string;
    contactNumber: string;
    email: string;
    password: string;
    address: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}