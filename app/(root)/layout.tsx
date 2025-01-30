import Header from "@/components/ui/shared/header";
import Footer from "@/components/ui/shared/header/footer";

export default async function HomeLayout({
    children,
}:{children:React.ReactNode }){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-col flex-1 p-4">{children}</main>
            <Footer/>
        </div>
    )
}