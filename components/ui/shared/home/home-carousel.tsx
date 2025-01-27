"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../carousel";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../button";

export function HomeCarousel({
    items,
}:{
    items:{
        image:string
         url:string
          title:string
           buttonCaption:string
        }[]
    }) {

const plugin = React.useRef(
    Autoplay({delay:3000,stopOnInteraction:true})
)
return(
    <Carousel 
    dir="ltr"
    plugins={[plugin.current]}
    className="w-full mx-auto"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    >

<CarouselContent>
    {
        items.map((item)=>(
            <CarouselItem key={item.title}>

            <Link href={item.url}>
<div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1" >

<Image
src={item.image}
alt={item.title}
fill
className="object-cover"
priority
/>
<div className="absolute w-1/3 left-16 top-1/2  transform -translate-y-1/2">
<h2 className='text-xl md:text-6xl font-bold mb-4 text-primary'>
{item.title}

</h2>
<Button className="hidden md:block">
{item.buttonCaption}
</Button>
</div>
</div>



            </Link>
</CarouselItem>
        ))
    }
</CarouselContent>
<CarouselPrevious className="left-0 md:left-12"/>
<CarouselNext className="right-0 md:right-12"/>
    </Carousel>
)

}