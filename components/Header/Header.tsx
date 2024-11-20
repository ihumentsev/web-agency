import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import {
  ContentWraper,
  HeaderBox,
  HeaderWraper,
  MobileBtn,
  NavigationList,
  SignInBtn,
} from "./Header.Styled.js";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LngBox from "../LngBox/LngBox";

export default function Header() {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);



    const handleMouseOver = () => {
    setIsMouseOverHeader(true);
  };

  const handleMouseOut = () => {
    setIsMouseOverHeader(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isMouseOverHeader) {
      // Если страница прокручивается вниз и прокрутка больше 100px — скрыть хедер
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false); // Показать хедер при прокрутке вверх
      }
    }

      // Обновляем последнее положение прокрутки
      setLastScrollY(currentScrollY);

      // Очистка предыдущего таймера, если прокрутка продолжается
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Устанавливаем таймер для скрытия хедера через 3 секунды, если прокрутка не происходит
      const newTimeout = setTimeout(() => {
        if (window.scrollY > 0 && !isMouseOverHeader) {
          // Скрывать хедер, только если страница не на самом верху
          setIsHidden(true);
        }
      }, 3000); // Время ожидания 3 секунды

      setScrollTimeout(newTimeout); // Обновляем таймер
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);

      // Очистка таймера при размонтировании компонента
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout, isMouseOverHeader]);
  return (
    <>
      <HeaderBox >
      < HeaderWraper className={isHidden ? "hidden" : ""} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
        <Container>
          <ContentWraper>
          <Link href="/">
            <Image
              className="heder-img"
              width={150}
              height={30}
              src="/Takesite-logo-color.svg"
              alt="Logo Take-Site"
            />
            </Link>
            <nav>
              <NavigationList>
                <li>
                  <Link href="/about">{t("navigation.about")}</Link>
                </li>
                <li>
                  <Link href="/services">{t("navigation.services")}</Link>
                </li>
                <li>
                  <Link href="">{t("navigation.pricing")}</Link>
                </li>
                <li>
                  <Link href="">{t("navigation.blog")}</Link>
                </li>
                <li>
                  <Link href="">{t("navigation.contacts")}</Link>
                </li>
              </NavigationList>
            </nav>

            <SignInBtn href="/about">CONTACT US</SignInBtn>
           
            <LngBox/>
            <MobileBtn>
            </MobileBtn>
            
          </ContentWraper>
        </Container>
        </HeaderWraper>
      </HeaderBox>
    </>
  );
}
