import { IproductInput } from "@/types";
import { Document, Schema, Model, model, models } from "mongoose";

export interface Iproduct extends Document, IproductInput {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new Schema<Iproduct>(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        images: [String],
        brand: {
            type: String,
            required: true,
        },
        description: { // Fixed typo here
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        listPrice: {
            type: Number,
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
        },
        tags: { type: [String], default: ['new arrival'] },
        colors: { type: [String], default: ['White', 'Red', 'Black'] },
        sizes: { type: [String], default: ['S', 'M', 'L', 'XL', 'XXL'] },
        avgRating: { type: Number, default: 0, required: true },
        numReviews: { type: Number, default: 0, required: true },
        ratingDistribution: [{
            rating: { type: Number, required: true },
            count: { type: Number, required: true }
        }],
        numSales:{ type: Number, default: 0, required: true },
        isPublished: { type: Boolean, default: false, required: true },
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', default: [] }],
    },
    { timestamps: true } 
);

const Product = (models.Product as Model<Iproduct>) ||
model<Iproduct>("Product", productSchema);
export default Product;