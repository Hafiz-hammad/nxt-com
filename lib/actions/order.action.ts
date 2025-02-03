"use server"
// import { number } from "zod";
import { OrderItem } from "@/types";
import { round2 } from "../utils";
import { FREE_SHIPPING_MIN_PRICE } from "../constant";
export const calcDeliveryDateAndPrice = async({
    items,
}:{deliveryDateIndex?:number
    items:OrderItem[]
})=>{
    const itemPrice = round2(
        items.reduce((acc,item) => acc + item.price * item.quantity, 0)
    )
const shippingPrice = itemPrice > FREE_SHIPPING_MIN_PRICE ? 0 :5
const taxPrice = round2(itemPrice * 0.15)
const totalPrice = round2(itemPrice + 
    
    (shippingPrice ? round2(shippingPrice):0) + (taxPrice ? round2(taxPrice):0)
)
return {
    itemPrice,
    shippingPrice,
    taxPrice,
    totalPrice
}


}