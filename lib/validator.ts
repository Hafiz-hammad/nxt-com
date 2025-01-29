import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const price = (field:string)=>
    z.coerce
.number()
.refine(
    (value) =>/^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
`${field} must have exactly two decimal places (e.g., 49.99)` )


export const ProductInputSchema = z.object({
    name: z.string().min(3,"Name must be at least 3 characters long"),
    slug: z.string().min(3,"Slug must be at least 3 characters long"),
    category: z.string().min(1,"Category is required"),
    images : z.array(z.string()).min(1,"Product must have 1 image "),
    brand: z.string().min(1,"Brand is required"),
    description: z.string().min(10,"Description must be at least 10 characters long"),
    isPublished: z.boolean(),
    price: price("Price"),
    listPrice: price("List Price"),
    countInStock: z.coerce
 
.number()
.int()
.nonnegative('count in stock must be a non-negative integer'),
tags:z.array(z.string()).default([]),
sizes:z.array(z.string()).default([]),
colors:z.array(z.string()).default([]),
avgRating: z.coerce
.number()
.min(0,'Avarage rating must be at least 0')
.max(5,'Avarage rating must be at most 5'),
numReviews: z.coerce
.number()
.int()
.nonnegative('count in stock must be a non-negative integer'),
ratingDistribution:z 
.array(z.object({rating:z.number(),count:z.number()}))
.max(5),
reviews:z.array(z.string()).default([]),
newSales:z.coerce
.number()
.int()
.nonnegative('Number of sales must be a non-negative number'),
})