import Link from "next/link";
import styled from "styled-components";

const HeaderWraper = styled.div`
position: fixed;
  top: 0;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.darckBackground}; */
  transition:  background-color 0.6s ease, transform 0.6s ease;
  &.hidden {
    transform: translateY(-100%);
  }
  &.not-at-top{
    background-color: ${({ theme }) => theme.colors.darckBackground};
  }
`
const ContentWraper = styled.div`
  
  display: flex;
  align-items: center;
  height: 80px;
  
  @media screen and (min-width: 1000px) {
    height: 90px;
  }
  @media screen and (min-width: 1216px) {
    height: 100px;
  }
  & .heder-img {
    width: 150px;
    height: auto;
    @media screen and (min-width: 1216px) {
      width: 176px;
    }
    @media screen and (min-width: 1400px) {
      width: 190px;
    }
  }
  & nav {
    display: none;
    margin-left: auto;
    @media screen and (min-width: 900px) {
      display: block;
    }
  }
`;
const HeaderBox = styled.header`
  position: relative;
  /* position: fixed; */
  /* top: 0; */
  /* width: 100%; */
  
  /* transition: transform 0.6s ease; */
  z-index: 5;

  /* &.hidden {
    transform: translateY(-100%);
  } */
   & .dark-bg{

   }
   
`;
const NavigationList = styled.ul`
  display: flex;
  & li {
    display: flex;
    margin-left: 64px;
    &:first-child {
      margin-left: 0;
    }
    @media screen and (min-width: 768px) {
      margin-left: 30px;
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) =>
      theme.fontsText[locale] || theme.fontsText.default};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding: 28px 0;
    @media screen and (min-width: 1216px) {
      font-size: 16px;
    }
    &.current{
      color: #92deed;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
        0 0 40px rgba(255, 255, 255, 0.2);
    }
    &:hover {
      color: #92deed;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
        0 0 40px rgba(255, 255, 255, 0.2);
      /* filter: blur(25px); */
    }
  }
`;

const SignInBtn = styled(Link)`
display: none;
   padding: 5px 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  font-family: ${({ theme, locale }) =>
    theme.fontsText[locale] || theme.fontsText.default};
  color: ${({ theme }) => theme.colors.lightText};
  border-radius: 10px;
  border: 1px solid #fff;
  backdrop-filter: blur(5px);
  /* margin-left: 48px; */
  /* display: none; */
  margin-left: auto;

  box-shadow: 0 0 10px rgba(146, 222, 237, 0.5); /* Светлый цвет тени */
  &:hover {
    background-color: #92deed;
    box-shadow: 0 0 20px rgba(146, 222, 237, 1); /* Увеличиваем тень для эффекта свечения */
    border: 1px solid var(--Stroke-Gradient, rgba(255, 255, 255, 0.2));
  }
  @media screen and (min-width: 480px) {
    display: block;
    /* margin-left: auto;
    padding: 5px 10px; */
  }
  @media screen and (min-width: 1216px) {
    /* margin-left: 48px; */
    padding: 16px 32px;
  }
`;

const MobileBtn = styled.button`
   width: 30px;
   height: 30px;
   padding: 10px 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   border: none;
   background-image: url('/icons/menu.svg');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   
   margin-left: auto;
   @media screen and (min-width: 480px){
    margin-left: 30px;
   }
   @media screen and (min-width: 900px){
    display: none;
   }
`

export { HeaderBox, NavigationList, SignInBtn, ContentWraper, HeaderWraper, MobileBtn };
