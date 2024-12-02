import { useEffect, useState } from "react";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useRouter } from "next/router";
import Link from "next/link";
import GoBack from "../../components/GoBack/GoBack";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

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
        {/* <GoBack prevPath={{ }} title="Services"/>
            <Link style={{background: "red"}} href="/services/1">Click me</Link> */}
        </LayoutHome>
        </>
        )
    )
}