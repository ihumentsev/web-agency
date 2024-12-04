import { useSession } from "next-auth/react";
import LayoutHome from "../components/LayoutHome/LayoutHome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import TechSection from "../components/TechSection/TechSection";
import TeamSection from "../components/TeamSection/TeamSection";
import CaseSection from "../components/CaseSection/CaseSection";
import QuesttionFormSection from "../components/QuesttionFormSection/QuesttionFormSection";
import GetConsultatioSection from "../components/GetConsultatioSection/GetConsultatioSection";

export default function About() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { data: session } = useSession();
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
          <>
            <AboutHero />
            <TechSection />
            <TeamSection/>
            <CaseSection/>
            <QuesttionFormSection/>
            <GetConsultatioSection/>
          </>
        </LayoutHome>
      </>
    )
  );
}
