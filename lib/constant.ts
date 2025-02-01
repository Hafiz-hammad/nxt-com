export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME||"NxtAmzn";
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN||"Speed less, enjoy more!";
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION||"Next.js Amazona is a full-stack e-commerce website built with Next.js, Tcss, and mng.";
export const PAGE_SIZE = Number(process.env.PAGE_SIZE||9)

export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE || 35
) 