import { useEffect, useState } from "react";
import GoBack from "../../components/GoBack/GoBack";
import LayoutHome from "../../components/LayoutHome/LayoutHome";
import { useRouter } from "next/router";

export default function DetailServices() {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);
  return (
    ready && (
      <LayoutHome>
        <GoBack prevPath={{ path: "/services", text: "Servises" }} title="1" />
      </LayoutHome>
    )
  );
}
