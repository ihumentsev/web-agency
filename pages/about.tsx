import { useSession } from "next-auth/react";
import Image from "next/image";
import LayoutHome from "../components/LayoutHome/LayoutHome";
import VideoSection from "../components/VideoSection/VideoSection";

export default function About(){
    const { data: session } = useSession();
 
        
    
    
     return (
        
        <>
        <LayoutHome>
            <>
            <div>About ifgigfigfi</div>
            <div>About ifgigfigfi</div>
           
            <VideoSection/>
            </>
           
        {/* session && (
        <h2>About {session.user.name}</h2>
           <div>{session.user.email}</div>
           <Image width={200} height={200} src={session.user.image} alt="jhjhjh"></Image>
        ) */}
        </LayoutHome>
        
        </>
        
    )
}