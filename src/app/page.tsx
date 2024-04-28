import Image from "next/image";
import HeaderP from "./pages/header";
import MainP from "./pages/main";
import FooterP from "./pages/footer";
import EngRegs from "./pages/engRegs";
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <title>BuildingRegs4Plans</title>
    </Head>
    <div className={inter.className}> 
    <div id='Header'>
      <HeaderP />
    </div><div id='Main'>
        <MainP />
      </div><div id='engRegs'>
        <EngRegs />
      </div><div id='footer'>
        <FooterP />
      </div>
      </div>
      </>
  )
}
