import { Document } from 'mongoose';
export interface IOrder extends Document {
    _id: string;
    waiterId: string;
    foodId: string[];
    tableNumberId: string;
    fullName: string;
    contactNumber: string;
    address: string;
    time: string;
    acceptORpending: string;
    totalBill: string;
    createdAt?: string;
    updatedAt?: string;
}
