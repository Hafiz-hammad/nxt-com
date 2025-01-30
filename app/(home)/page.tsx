// "use client"
import { Card, CardContent } from "@/components/ui/card";
import BrowsingHistoryList from "@/components/ui/shared/browsing-history-list";
import { HomeCard } from "@/components/ui/shared/home/Home-card";
import { HomeCarousel } from "@/components/ui/shared/home/home-carousel";
import ProductSlider from "@/components/ui/shared/product/product-slider";
import { getAllCategories, getProductByTag, getProductsForCard } from "@/lib/actions/product.action";
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
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
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
  const todaysDeals = await getProductByTag({tag:'todays-deal'})
  const bestSellingProducts = await getProductByTag({tag:'best-seller'})
  return(
    <>
    <HomeCarousel items={data.carousels}/>
    <div className="md:p-4 md:space-y-4 bg-border">

      <HomeCard card={cards}/>
    
 <Card className="w-full rounded-none">

  <CardContent className="p-4 items-center gap-3">
<ProductSlider title={"Todays Deals"} products={todaysDeals}/>
  </CardContent>
  </Card> 
  <Card className="w-full rounded-none">
    <CardContent className="p-4 items-center gap-3">
      <ProductSlider title={"Best Selling Products"} 
          products={bestSellingProducts}
          hideDetails
      />

    </CardContent>
  </Card>
  
     </div>
<div className="bg-background p-4">
  <BrowsingHistoryList/>
  </div>    
    </>
  )


}
