import { useEffect, useState } from "react";
import ArrowButton from "../Buttons/ArrowButton";
import {
  
  BtnWraper,
  HeroSection,
  HeroText,
  Text1,
  Text2,
  TextContainer,
} from "./Hero,styled";
import Container from "../Container/Container";

export default function Hero() {
  // const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset; // Текущая прокрутка
      setScrollPos(position); // Обновляем состояние позиции прокрутки
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeroSection>
        <Container>
          <TextContainer>
            <Text1
              style={{
                transform: `translateX(${-scrollPos * 1.5}px) `,
                transition: "transform 0.5s ease-out",
              }}
            >
              YOUR BEST <br />
            </Text1>
            <Text2
              style={{
                transform: `translateX(${scrollPos * 1.5}px)`,
                transition: "transform 0.5s ease-out",
              }}
            >
              <span className="frag">IT</span>PARTNERS
            </Text2>
          </TextContainer>
          <HeroText>
            From custom software development to cybersecurity, our team of
            experts is dedicated to delivering solutions that are tailored to
            your unique needs.
          </HeroText>
          <TextContainer></TextContainer>
          <BtnWraper>
            <ArrowButton text="EXPLORE NOW" handler={() => {}}></ArrowButton>
          </BtnWraper>
        </Container>
      </HeroSection>
    </>
  );
}
