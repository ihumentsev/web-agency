import { useEffect, useRef } from "react";
import {BenefitsItem, ThumbVideo, VideoBackdrop} from './VideoSection.styled'

export default function VideoSection(){
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.75; // Устанавливаем скорость 0.5x (в два раза медленнее)
        }
      }, []);
    return (

        <>
          <section>
            
            <ThumbVideo>
            <ul>
                <BenefitsItem>
                    <h3>500+</h3>
                    <p>Successful Projects</p>
                </BenefitsItem>
                <BenefitsItem>
                    <h3>98%</h3>
                    <p>Satisfied Clients</p>
                </BenefitsItem>
                <BenefitsItem>
                    <h3>35+</h3>
                    <p>Handled Countries</p>
                </BenefitsItem>
               
            </ul>
          <video ref={videoRef} autoPlay loop muted playsInline className="">
        <source src="/video/My Video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <VideoBackdrop></VideoBackdrop>
      </ThumbVideo>
          </section>
        </>
    )
}