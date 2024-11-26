import styled from "styled-components";

const QuestFormSection = styled.section`
background-color: ${({ theme }) => theme.colors.darckBackground};
position: relative;
padding: 200px 0;
background-image: url('/layered-waves-haikei (1).svg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
/* transform: rotate(180deg); */
& h2{
    color: ${({ theme }) => theme.colors.lightText};
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-weight: 700;
    line-height: clamp(30px, 6vw + 2rem, 110px);

}
`
const QuestionForm = styled.form`
 width: 100%;
 height: fit-content;
 border-radius: 50px;
 border: 1px solid  rgba(255, 255, 255, 0.20);
 background:  linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%);
 padding: 30px 10px 40px 10px;
 @media screen and (min-width: 480px){
    width: 80%;
    margin: 0 auto; 
    padding: 40px 20px 50px 20px;
 }
 @media screen and (min-width: 768px){
    width: 80%;
    margin: 0 0  0 auto; 
    padding: 40px 20px 50px 20px;
 }
 @media screen and (min-width: 1080px){
    padding: 40px 30px 50px 30px;
 }
 @media screen and (min-width: 1400px){
    width: 550px;
    
 }
 @media screen and (min-width: 1560px){
    padding: 30px 30px 30px 30px;
 }
 & h3{
    color: ${({ theme }) => theme.colors.lightText};  
    font-size: 56px;
    font-weight: 700;
    line-height: normal;
    font-size: clamp(24px, 5vw + 1rem, 56px);
    @media screen and (min-width: 768px){
        font-size: 30px;
    }
    @media screen and (min-width: 900px){
        font-size: clamp(24px, 3vw + 1rem, 56px);
    }
    @media screen and (min-width: 1000px){
        font-size: clamp(24px, 2vw + 1rem, 56px);
    }
    @media screen and (min-width: 1200px){
        font-size: clamp(24px, 3vw + 1rem, 56px);
    }
    
 }
 & p {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
 }
`

const InputWraper = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 24px;
   & label{
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 26px; 
margin-bottom: 8px;
   }
   & input{
    /* height: 60px; */
    border-radius: 15px;
    background: #FFF;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
    padding: 10px;
   }
   & textarea{
    border-radius: 15px;
    background:  #FFF;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
    padding: 10px;
    padding: 10px;
    height: 180px;
   }
`
const FormBtnWraper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   & button {
     border-radius: 15px;
     background: ${({ theme }) => theme.colors.darckBackground};
     padding: 10px 30px;
     width: fit-content;
     color: ${({ theme }) => theme.colors.lightText};
     text-align: center;
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 16px;
    font-weight: 600;
    line-height: 26px; 
    border: none;
   }
`

const TitleWraper = styled.div`
    margin-bottom: 60px;
    @media screen and (min-width: 768px){
        max-width: 50%;
    }
    @media screen and (min-width: 1560px){
        max-width: 60%;
    }
`
const ContentWraper = styled.div`
   display: flex;
   flex-direction: column;
   @media screen and (min-width: 768px){
    flex-direction: row;
   }
`
const FormWrper = styled.div`
width: 100%;
@media screen and (min-width: 768px){
    width: 50%;
   }
`
export {QuestFormSection, QuestionForm, InputWraper, FormBtnWraper, TitleWraper, ContentWraper, FormWrper}