import Link from "next/link";
import {BackdropList, BackdropMenu, ContentMenu, LangBox, LinkList, MobileMenuHeder, MobileModal, SocialWraper} from './MobileMenuModal.styled'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
// import logo from '/Takesite-logo-color.svg'

export default function MobileMenuModal({modalStatus, backDropClose}){
     const [isOpen, setIsOpen] = useState(false);
     const [activeSubMenu, setActiveSubMenu] = useState(false)
     const router = useRouter();
     const { i18n } = useTranslation();
console.log(router);

const subMenuHendler = () =>{
    setActiveSubMenu(!activeSubMenu)
}

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
    // setIsDropdownOpen(!isDropdownOpen);
    
  };
     useEffect(()=>{
        if (modalStatus) {

            setIsOpen(true)  
        }
     },[modalStatus])

    return (
        <>
          <MobileModal className={isOpen ? "active" : null}>
            <MobileMenuHeder>
                <Image src={"/icons/Logo-new-dark.svg"} alt="logo" width={150} height={50}/>
            <button type="button" onClick={backDropClose}></button>
            </MobileMenuHeder>
            
            <LangBox>
                <ul>
                    <li className={router.locale === "uk" ? "active" : null} onClick={() => changeLanguage("uk")}>UA</li>
                    <li className={router.locale === "ru" ? "active" : null} onClick={() => changeLanguage("ru")}>RU</li>
                    <li className={router.locale === "en" ? "active" : null} onClick={() => changeLanguage("en")}>EN</li>
                    <li className={router.locale === "pl" ? "active" : null} onClick={() => changeLanguage("pl")}>PL</li>
                </ul>
            </LangBox>
            <ContentMenu>
                <LinkList>
                    <li>
                        <Link href="/about" className={router.asPath === "/about" ? "active" : null}>About us</Link>
                        <button type="button" onClick={subMenuHendler}></button>
                    </li>
                    <li>
                        <Link href="/services" className={router.asPath === "/services" ? "active" : null}>Services</Link>
                    </li>
                    <li>
                        <Link href="/" className={router.asPath === "/price" ? "active" : null}>Pricing</Link>
                        <button type="button" onClick={subMenuHendler}></button>
                    </li>
                    <li>
                        <Link href="/blog" className={router.asPath === "/blog" ? "active" : null}>Blog</Link>
                        <button type="button" onClick={subMenuHendler}></button>
                    </li>
                    <li>
                        <Link href="/contact" className={router.asPath === "/contact" ? "active" : null}>Contacts</Link>
                    </li>
                </LinkList>
                <BackdropMenu className={activeSubMenu ? "active" : null}>
               <div>
                <button type="button" onClick={subMenuHendler}></button>
                <h3>Title</h3>
                </div>
                <BackdropList>
                <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                    <li>
                        <Link href="/">Sub menu link</Link>
                    </li>
                </BackdropList>
            </BackdropMenu>
            </ContentMenu>
            <SocialWraper>
                <ul>
                <li>
                        <Link href="/"></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>
                    
                </ul>
            </SocialWraper>
            
          </MobileModal>
        </>
    )
}