import Header from "@/components/ui/shared/header";
import Footer from "@/components/ui/shared/header/footer";

export default async function homelayout({children,}:{children:React.ReactNode}){
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 flex flex-col">{children}</main>
<Footer/>
        </div>
    )
}