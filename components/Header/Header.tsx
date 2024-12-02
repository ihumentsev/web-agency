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
import Portal from "../ModalPortal/ModalPortel";
import useModal from "../../Hooks/useModal"
import MobileMenuModal from "../Modals/MobileMenuModal";
import { useRouter } from "next/router";

export default function Header() {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  const { mounted,  backDropClose, toggleModal} = useModal();
  const router = useRouter();




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

    // Логика изменения класса
    const header = document.getElementById("header");
    if (currentScrollY > 0) {
      header.classList.add("not-at-top");
    } else {
      header.classList.remove("not-at-top");
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


  // useEffect(() => {
  //   const header = document.getElementById('header');
  //   const sections = document.querySelectorAll('section');
   

  //   const handleScroll = () => {
  //     let currentSection = '';
  
  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop; // Верхняя граница секции
  //       const sectionHeight = section.clientHeight; // Высота секции
  //       const scrollY = window.scrollY; // Текущая прокрутка страницы
  
  //       // Проверяем, если верхняя граница секции находится в пределах видимой области экрана
  //       if (scrollY >= sectionTop  && scrollY < sectionTop + sectionHeight ) {
  //         currentSection = section.dataset.section; // получаем значение data-section
  //       console.log("currentSection", currentSection);
        
  //       }
  //     });

  //     if (currentSection === 'dark') {
  //       console.log("dark");
        
  //       header.classList.add('dark-bg');
  //       header.classList.remove('light-bg'); 
  //     } else if (currentSection === 'light') {
  //       console.log("light");
  //       header.classList.add('light-bg');
  //       header.classList.remove('dark-bg');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  // useEffect(() => {
  //   const header = document.getElementById('header');
  
  //   const handleScroll = () => {
  //     const headerRect = header.getBoundingClientRect();
  //     if (headerRect.top === 0) {
  //       header.classList.add('light-bg');
  //     } else {
  //       header.classList.remove('light-bg');
  //     }
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  

  return (
    <>
      <HeaderBox >
      < HeaderWraper id="header" className={isHidden ? "hidden" : ""} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
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
                  <Link href="/about" className={router.pathname === "/about" ? "current" : null}>{t("navigation.about")} </Link>
                </li>
                <li>
                  <Link href="/services" className={router.pathname === "/services" ? "current" : null}>{t("navigation.services")}</Link>
                </li>
                <li>
                  <Link href="" className={router.pathname === "" ? "current" : null}>{t("navigation.pricing")}</Link>
                </li>
                <li>
                  <Link href="" className={router.pathname === "" ? "current" : null}>{t("navigation.blog")}</Link>
                </li>
                <li>
                  <Link href="/contact" className={router.pathname === "/contact" ? "current" : null}>{t("navigation.contacts")}</Link>
                </li>
              </NavigationList>
            </nav>

            <SignInBtn href="/contact">CONTACT US</SignInBtn>
           
            <LngBox/>
            <MobileBtn onClick={toggleModal}>
            </MobileBtn>
            <Portal modalStatus={mounted} backDropClose={backDropClose}>
              <MobileMenuModal modalStatus={mounted} backDropClose={backDropClose}></MobileMenuModal>
            </Portal>
          </ContentWraper>
        </Container>
        </HeaderWraper>
      </HeaderBox>
    </>
  );
}
