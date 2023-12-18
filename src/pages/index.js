import Image from 'next/image'
import {Montserrat} from 'next/font/google'
import Header from "../components/Header";
import SideMenu from "@/components/SideMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import Mediums from "@/components/sections/Mediums";
import Payment from "@/components/sections/Payment";
import ContactUs from "@/components/sections/ContactUs";
import {IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp} from "@tabler/icons-react";
import {rem} from "@mantine/core";
import Hotjar from '@hotjar/browser';

// const siteId = 3798247;
// const hotjarVersion = 6;


const montserrat = Montserrat({subsets: ['cyrillic']})

export default function Home() {
  // Hotjar.init(siteId, hotjarVersion);

  const contacts = [
    {
      text: "Whatsapp", link: "https://wa.me/77478395761",
      icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)}/>,
      miniIcon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(30)}/>
    },
    {
      text: "Telegram", link: "https://t.me/astachowa_anna",
      icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)}/>,
      miniIcon: <IconBrandTelegram strokeWidth={1.7} size={rem(30)}/>
    }
    
  ]

  return (
    <>
      <div className={`bg-bgDark text-primary min-h-screen  ${montserrat.className}`}>
        <div className="fixed top-0 left-0 right-0 bg-bgDark z-20">
          <div className="fixed right-[10px]  top-[10px] md:hidden ">
            <SideMenu/>
          </div>
          <div className="hidden md:block">
            <Header/>
          </div>
        </div>
        <div className="h-[60px] md:h-[130px] max-sm:h-[10px]"></div>
        <main
          // className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}
          className={"overflow-hidden"}
        >
          <Hero/>
          {/* <About/> */}
          <Mediums/>
          <Payment/>
          {/* <Services/> */}
          {/*<p className="remark py-[20px]">*Результат может варьироваться от случая к случаю</p>*/}
          {/* <Reviews/> */}
          <ContactUs contacts={contacts}/>

        </main>
        {/*<div className="h-[100vh]"></div>*/}
        {/*<footer className="text-center py-2 text-[14px]">©Developed by Vittorio</footer>*/}
      </div>
    </>
  )
}
