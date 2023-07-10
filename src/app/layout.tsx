import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from './components/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ["100" , "300" , "400" , "500" , "700" , "900"] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header ></Header>
        <div className={roboto.className}>{children}</div>
      </body>
    </html>
  )
}
