import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutHome from "../components/LayoutHome/LayoutHome";
import ContactSection from "../components/ContactSection/ContactSection";
import GetConsultatioSection from "../components/GetConsultatioSection/GetConsultatioSection";

export default function Contact(){
    const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

    return(
        ready && (
        <>
        <LayoutHome>
        <ContactSection/>
        <GetConsultatioSection/>
        </LayoutHome>
        
            </>
        )
    )
}