import { Contact } from "@/componenets/Contact";
import { Footer } from "@/componenets/Footer";
import { Hero } from "@/componenets/Hero";
import { KeyMet } from "@/componenets/KeyMet";
import { LogoAnime } from "@/componenets/LogoAnime";
import { NavBar } from "@/componenets/NavBar";
import { Portfolio } from "@/componenets/Portfolio";
import { Services } from "@/componenets/Services";
import { Stack } from "@/componenets/Stack";

export default function Home() {
  return (
   <>
   <NavBar/>
   <Hero/>
   <Stack/>
   <LogoAnime/>
   <Portfolio/>
   <KeyMet/>
   <Services/>
   <Contact/>
   <Footer/>
   </>
  );
}
