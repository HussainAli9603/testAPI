import { Schema, model, Mongoose } from 'mongoose';
import { IFood } from '../types/document/IFood';
const IFoodSchema = new Schema(
    {
        name: { type: String },
        price: { type: String },
        type: { type: String },
        size: { type: String },
    },
    { timestamps: true }
);
export const FoodSchema = model<IFood>('FoodSchema', IFoodSchema);