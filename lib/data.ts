const data = {
    headerMenus:[
        {
            name: "Today's Deals",
            href: "/search?tag=todays-deals"
        },
        {
            name: "New Arrivals",
            href: "/search?tag=new-arrivals",

        },
        {
            name: "Featured Products",
            href: "/search?tag=featured",

        },
        {
            name: "Best Sellers",
            href: "/search?tag=best-sellers",
        },
        {
            name: "Browsing History",
            href: "/#browsing-history",
        },
        {
            name: "customer Service",
            href: "/page/customer-service",
        },
        {
            name:"About US",
            href: "/page/about-us",
        },
        {
            name:"Help",
            href: "/page/help",
        }


    ],
    carousels:[
        {
            title:"Most Popular Shoes For Sale",
            buttonCaption:"Shop Now",
            image:"/images/banner3.jpg",
            url:"/search?category=Shoes",
            isPublished:true,


        },
        {
            title:"Best Sellers in T-shirts",
            buttonCaption:"Shop Now",
            image:"/images/banner1.jpg",
            url:"/search?category=T-shirts",
            isPublished:true,
        },
        {
            title:"Best Deals on wrist watches",
            buttonCaption:"See More", 
            image:"/images/banner2.jpg",
            url:"/search?category=Wrist Watches",
            isPublished:true,

        }
    ]



}
export default data;