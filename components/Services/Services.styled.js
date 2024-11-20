import styled from "styled-components";

const ServicesSection = styled.div`
   padding: 200px 0;
   background-color: ${({ theme }) => theme.colors.lightBackground};
   & h2{
    color: ${({ theme }) => theme.colors.darkText};
    text-align: center;
    /* font-size: 100px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-weight: 700;
    line-height: 110px;  
   }
`

const ServicesList = styled.ul`
  margin-top: 140px;
`
const ServicesItem = styled.li`
padding: 60px 0 47px 0;
position: relative;
border-bottom: solid 1px ${({ theme }) => theme.colors.darkText};
height: 195px;
overflow: hidden;
display: flex;
cursor: pointer;

& button {
    position: absolute;
    top: 60px;
    right: 50px;
    background-color: transparent;
    background-image: url('/icons/ArrowIconBlack.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    border: none;
    width: 100px;
    height: 100px;
}
&:hover{
    height: fit-content;
}
&:hover button{
/* transform: translate(-1500%) ; */
top: 70%;
left: 10px;
background-image: url('/icons/ArrowIconBlackSmoll.svg');
background-size: 80px 80px;
}
&:hover h3{
font-family: ${({ theme, locale }) => theme.fontsTitle[locale] || theme.fontsTitle.default};
font-size: 56px;
font-weight: 700;
line-height: normal;
}
&:hover p{
    display: block;
}
&:hover img {
    display: block;
}

& h3 {
    color: ${({ theme }) => theme.colors.darkText};
    font-family:${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 56px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
}

& p{
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
    display: none;
}
& img{
    border-radius: 50px;
    display: none;
    width: 40%;
    height: auto;
    margin-left: auto;
}
& .right-wraper{
    width: 50%;
    padding-right: 50px;
}
`
export {
    ServicesSection,
    ServicesList,
    ServicesItem
}