// "use client"
import { HomeCard } from "@/components/ui/shared/home/Home-card";
import { HomeCarousel } from "@/components/ui/shared/home/home-carousel";
import { getAllCategories, getProductsForCard } from "@/lib/actions/product.action";
import data from "@/lib/data";
import { toSlug } from "@/lib/utils";

export default async function Page(){
  const categories = (await getAllCategories()).slice(0,4)
  const newArrival = await getProductsForCard({
    tag:'new-arrival',
    limit:4
  })
  const featured = await getProductsForCard({
    tag:'featured',
    limit:4,
  })
  const bestSellers =  await getProductsForCard({
    tag:'best-sellers',
    limit:4,

  })
  const cards = [
    {
      title:'Categories to explore',
 link:{
  text:'See More',
  href:'/search'
 } ,
 items:categories.map((category)=>({
  name:category,
  image:`/images/${toSlug(category)}.jpg`,
  href:`/search?category=${category}`,
  // console.log(category)
 })),
    },
{
title:'Explore New Arrivals',
items:newArrival,
link:{
  text:'View All',
  href:'search?tag=new-arrival',
},

},

{
title:'Discoverd Best Sellers',
items:bestSellers,
link:{
  text:'View All',
  href:'search?tag=new-arrival',
},



},
{
title:'Featured Products',
items:featured,
link:{
text:'Shop Now!!',
href:'search?tag=new-arrival',
},




}
  ]
  
  return(
    <>
    <HomeCarousel items={data.carousels}/>
    <div className="md:p-4 md:space-y-4 bg-border">

      <HomeCard card={cards}/>
    
    </div>
    
    </>
  )


}