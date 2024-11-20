import { useEffect, useState } from "react";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useRouter } from "next/router";
import Hero from "../../components/Hero/Hero";
import Link from "next/link";

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
            <div>jfdjfkf</div>
            <Hero>
            </Hero>
            <Link href="/services/1">hkjhkjhkjhk</Link>
        </LayoutHome>
        </>
        )
    )
}