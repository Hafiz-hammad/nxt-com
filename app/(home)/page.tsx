// "use client"
import { HomeCard } from "@/components/ui/shared/home/Home-card";
import { HomeCarousel } from "@/components/ui/shared/home/home-carousel";
import { getAllCategories, getProductsForCard } from "@/lib/actions/product.action";
import data from "@/lib/data";
import { toSlug } from "@/lib/utils";

export default async function Page(){
  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({
    tag: 'new-arrival',
  })
  const featureds = await getProductsForCard({
    tag: 'featured',
  })
  const bestSellers = await getProductsForCard({
    tag: 'best-seller',
  })
  const cards = [
    {
      title: ('Categories to explore'),
      link: {
        text: ('See More'),
        href: '/search',
      },
      items: categories.map((category) => ({
        name: category as string,
        image: `/images/${toSlug(category as string)}.jpg`,
        href: `/search?category=${category as string}`,
      })),
    },
    {
      title: ('Explore New Arrivals'),
      items: newArrivals,
      link: {
        text: ('View All'),
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: ('Discover Best Sellers'),
      items: bestSellers,
      link: {
        text: ('View All'),
        href: '/search?tag=new-arrival',
      },
    },
    {
      title: ('Featured Products'),
      items: featureds,
      link: {
        text: ('Shop Now'),
        href: '/search?tag=new-arrival',
      },
    },
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
