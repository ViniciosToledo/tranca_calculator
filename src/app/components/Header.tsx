'use client'

import Image from 'next/image'
import { signIn, useSession, signOut } from "next-auth/react"
import { Button } from './ui/button'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "./ui/menubar"

const Header = () => {

    const {data, status} = useSession()

    return (
        <header className="container flex justify-between items-center p-5 bg-slate-200">
            <Image src={"/logo.png"} alt='Logo' width={50}height={50} />
            {status === "unauthenticated" && (
                <>
                    <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Entrar</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem onClick={()=>signIn()}>Google Login</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    </Menubar>
                    
                </>
            )}
                
            {status === "authenticated" && (
            <>
                <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className='gap-3 max-h-[100%]'>
                        <Image className='rounded-full' src={data?.user?.image ?? ""} alt='user image' width={30}height={30}></Image>
                        <p>Perfil</p></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Minhas Partidas</MenubarItem>
                        <MenubarItem onClick={()=>signOut()}>Sair</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                </Menubar>
            </>
                
            )}
           
            
        </header>
    )
}
 
export default Header;