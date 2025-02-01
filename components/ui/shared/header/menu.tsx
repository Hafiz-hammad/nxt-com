import Link from "next/link";
import CartButton from "./Cart-button";

export default function Menu(){
    return(
        <>
        <div className="flex justify-end"> 
            <nav className="flex gap-3 w-full">
                <Link href="/signin" className="header-button flex items-center">
Hello I am Sign In 
                </Link>

<CartButton/>


            </nav>
        </div>
        </>
    )
}