import { useEffect, useState } from "react";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useRouter } from "next/router";
import Link from "next/link";
import GoBack from "../../components/GoBack/GoBack";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import HowWorkSection from "../../components/HowWorkSection/HowWorkSection";
import GetConsultatioSectionNew from "../../components/GetConsultatioSection/GetConsultatioSectionNew";

export default function Services(){
    const [ready, setReady] = useState(false);
  const router = useRouter();
  
  


  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

    return (
        ready && (
        <>
        <LayoutHome>
          <ServicesSection/>
          <HowWorkSection/>
          <GetConsultatioSectionNew/>
        </LayoutHome>
        </>
        )
    )
}