"use client"

import { usePathname } from "next/navigation"


export default function NotFound(){
    const pathName = usePathname()
    const productId = pathName.split("/")

    return <div>not Found For Product {productId} </div>
}