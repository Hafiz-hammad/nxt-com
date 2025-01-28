import { ProductInputSchema } from "@/lib/validator";
import { z } from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
    products: IProductInput[];
    headerMenu: {
        name: string
        href: string
    }[]
    carousel:{
        image:string
        url:string
        title:string
        buttonCaption:string
        isPublished:boolean
    }[]
}