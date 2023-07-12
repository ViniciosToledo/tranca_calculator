'use client'

import Image from 'next/image'
import { signIn, useSession, signOut } from "next-auth/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Header = () => {

    const {data, status} = useSession()

    return (
        <header className="container flex justify-between items-center p-5 bg-slate-500">
            <Image src={"/logo.png"} alt='Logo' width={50}height={50} />
            {status === "unauthenticated" && (
                <div>
                <button onClick={()=>signIn()} className='px-4 py-2 bg-black text-white font-medium rounded-lg'>Entrar</button>
            </div>
            )}
                
            {status === "authenticated" && (
                <div>
                <button onClick={()=>signOut()} className='px-4 py-2 bg-black text-white font-medium rounded-lg'>Sair</button>
            </div>
            )}
           
            
        </header>
    )
}
 
export default Header;