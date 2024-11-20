
import { useTranslation } from "react-i18next";
import {LngList, LangWraper, ActiveLng, DropdownContainer } from './LngBox.styled'
import { useRouter } from "next/router";
export default function LngBox(){
    const { i18n } = useTranslation();
    const router = useRouter();

    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setIsDropdownOpen(false);
    //       }
    //     };
    
    //     document.addEventListener('mousedown', handleOutsideClick);
    
    //     return () => {
    //       document.removeEventListener('mousedown', handleOutsideClick);
    //     };
    //   }, [isDropdownOpen]);

      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        router.push(router.pathname, router.asPath, { locale: lng });
        // setIsDropdownOpen(!isDropdownOpen);
        
      };

    //   const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
        
    //   };

    return (
        <>
        <DropdownContainer>
        <LangWraper>
          <ActiveLng >
             {i18n.language === "ru"&& "RU"}
             {i18n.language === "uk"&& "UA"}
             {i18n.language === "en"&& "EN"}
             {i18n.language === "pl"&& "PL"}
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                <path d="M31.4885 12.757L19.9322 1.20041C19.6023 0.870525 19.1626 0.689453 18.6938 0.689453C18.2245 0.689453 17.7851 0.870785 17.4552 1.20041L16.406 2.2499C16.0764 2.57926 15.8948 3.01919 15.8948 3.48826C15.8948 3.95707 16.0764 4.41183 16.406 4.74119L23.1478 11.4978H1.72877C0.763051 11.4978 0 12.2538 0 13.2198V14.7035C0 15.6695 0.763051 16.5017 1.72877 16.5017H23.2243L16.4062 23.2961C16.0766 23.626 15.895 24.0539 15.895 24.523C15.895 24.9916 16.0766 25.4258 16.4062 25.7554L17.4555 26.8015C17.7854 27.1314 18.2248 27.3111 18.6941 27.3111C19.1629 27.3111 19.6026 27.129 19.9325 26.7992L31.4888 15.2428C31.8195 14.9119 32.0013 14.4702 32 14.0006C32.001 13.5294 31.8195 13.0874 31.4885 12.757Z" fill="white"/>
             </svg>
          </ActiveLng>
          
          <LngList className="dropdown" >
            <li onClick={() => changeLanguage("ru")}>  RU</li>
            <li onClick={() => changeLanguage("uk")}>  UA</li>
            <li onClick={() => changeLanguage("en")}>  EN</li>
            <li onClick={() => changeLanguage("pl")}>  PL</li>
          </LngList>
          </LangWraper>
          </DropdownContainer>
        </>
    )
}


