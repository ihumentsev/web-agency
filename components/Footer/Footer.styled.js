import styled from "styled-components";

const FooterSection = styled.footer`
background-color:  ${({ theme }) => theme.colors.lightBackground};
background-image: url('/Wireframe Vector Light.svg');
background-repeat: no-repeat;
background-position: center top;
background-attachment: fixed;
background-size: cover;
padding: 40px 0 0 0; 
min-height: 100vh;
/* min-height: 100%; */
position:-webkit-sticky; position:sticky; 
bottom:0;
@media screen and (min-width:768px){
  padding: 80px 0 80px 0; 
}
@media screen and (min-width: 1000px){
  padding: 132px 0 200px 0; 
}

`

const FooterWraper = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
position: relative;
& h2{
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px; 
  }
  @media screen and (min-width: 1000px){
    flex-direction: row;
  }

& img {
  display: block;
  width: 150px;
  @media screen and (min-width: 768px){
    width: 200px;
  }
  @media screen and (min-width: 1080px){
    width: 250px;
  }
}
`
const ContentWraper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
@media screen and (min-width: 768px){
  
  flex-direction: row;
  margin-top: 100px;
  margin-left: auto;
  justify-content: space-between;
  }
  @media screen and (min-width: 1400px){
  width: 70%;
  }
`
const ScrollBtn = styled.button`
width: 100px;
height: 100px;
border-radius: 50%;
border: none;
background-color: ${({ theme }) => theme.colors.darckBackground};
background-image: url('/icons/Text.svg'), url('/icons/Arrowup.svg');
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%, 30% 30% ;
position: absolute;
top: 30px;
right: 0;
@media screen and (min-width: 768px){
  top: -20px;
  right: 20px;
  width: 161px;
height: 161px;
}
@media screen and (min-width: 1000px){
  top: 170px;
  left: 0;
  width: 161px;
height: 161px;
}
`

const FormWraper = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  & ul{
    display: flex;
    align-self: center;
    gap: 64px;
    margin-top: 20px;
    & svg{
        width: 30px;
        height: 30px;
    }
  }
  @media screen and (min-width: 768px){
    margin-top: 0;
  }
  @media screen and (min-width: 1400px){
    margin-right: auto;
  }
`

const LinkBox = styled.div`
display: flex;
justify-content: space-around;
padding:30px 20px 30px 20px;
width: 100%;
margin-left: auto;
@media screen and (min-width: 1400px){
  width: 50%;
  }
`
const LinkWraper = styled.div`
width: 40%;
& h3{
  color: ${({ theme }) => theme.colors.darkText};
font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
/* font-size: 24px; */
font-size: clamp(20px, 5vw , 32px);
font-style: normal;
font-weight: 600;
line-height: clamp(30px, 5vw , 40px); 
}
& a{
    color: ${({ theme }) => theme.colors.darkText};
font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
font-size: clamp(14px, 5vw , 20px);;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
}

& ul{
    margin-top: 30px;
    &  * + * {
    margin-top: 16px;
}
}

`

const InputWraper = styled.div`
position: relative;
margin-top: 20px;
margin-bottom: 20px;
& input{
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.colors.darkText};
    width: 100%;
    padding: 16px 0 16px 10px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkText};
   font-family: Poppins;
   font-size: 20px;
   font-weight: 400;
   line-height: 30px; 
   outline: none;
   @media screen and (min-width: 768px){
    width: 310px;
   }
}
& button {
   position : absolute;
   bottom: 15px;
   right: 0;
   background-image: url('/icons/ArrowIconBlackSmoll.svg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: 28px;
   width: 30px;
   height: 30px;
   border: none;
   background-color: transparent;
   cursor: pointer;
}
`
export{
    FooterSection,
    FooterWraper,
    ScrollBtn,
    FormWraper,
    LinkWraper,
    InputWraper,
    LinkBox,
    ContentWraper
}