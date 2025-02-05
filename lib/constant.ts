export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME||"NxtAmzn";
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN||"Speed less, enjoy more!";
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION||"Next.js Amazona is a full-stack e-commerce website built with Next.js, Tcss, and mng.";
export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || "Copyright © 2025 Next.js Amazona All rights reserved.";
export const PAGE_SIZE = Number(process.env.PAGE_SIZE||9)

export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE || 35
) 


export const AVAILABLE_PAYMENT_METHODS =[
    {
        name:"PayPal",
        commision:0,
        isDefault:true
    },
    {
        name:"Stripe",
        commision:0,
isDefault:false,

    },
    {
        name:"Cash On Delevery",
        commision:0,
        isDefault:false
    }
]
export const DEFAULT_PAYMENT_METHOD = 
process.env.DEFAULT_PAYMENT_METHOD || 'Paypal'


export const AVAILABLE_DELEVERY_DATES = [
    {
        name:"Tomorrow",
        daysToDelevery:1,
        shippingPrice:12.9,
        freeShippingMinPrice:0,

    },
    {
        name:"Next 3 Days",
        daysToDelevery:3,
        shippingPrice:6.9,
        freeShippingMinPrice:0
    },{
        name:"Next 5 Days",
        daysToDelevery:5,
        shippingPrice:4.9,
        freeShippingMinPrice:35,
    },
]
