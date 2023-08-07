

import NavBar from './components/NavBar'
import './globals.css'
import { Montserrat, Lobster } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lob' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className={`${montserrat.variable} ${lobster.variable} bg-gradient-to-r from-cyan-500 to-blue-500 w-full min-h-screen z-10`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
