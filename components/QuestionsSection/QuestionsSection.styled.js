import styled from "styled-components";

const QuestionSection = styled.section`
padding: 100px 0;
background-color: ${({ theme }) => theme.colors.darckBackground};
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
@media screen and (min-width: 768px ){
        padding: 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 200px 0;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }
& h2{
    color: ${({ theme }) => theme.colors.lightText};
font-family:  ${({ theme, locale }) => theme.fontsTitle[locale] || theme.fontsTitle.default};
/* font-size: 50px; */
font-size: clamp(24px, 5vw + 1rem, 100px);
font-style: normal;
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px);
line-height: clamp(30px, 6vw + 2rem, 110px);
text-align: center;
@media screen and (min-width: 768px){ 
  text-align: start;
  max-width: 350px;
   }
   @media screen and (min-width: 1000px){ 
    max-width: fit-content;
   }
}
`

const ContentWraper = styled.div`
   display: flex;
   flex-direction: column;
   @media screen and (min-width: 1000px){
    flex-direction: row;
   }
` 
const PartWraper = styled.div`
width: 100%;
display: flex;
flex-direction: column;

align-items: center;
@media screen and (min-width: 1000px){
  width: 50%;
  align-items: flex-start;
   }
   &.title-wraper{
    margin-bottom: 50px;
    @media screen and (min-width: 768px){
      flex-direction: row; 
    }
    @media screen and (min-width: 1000px){
      flex-direction: column; 
      margin-bottom: 0;
    }
   }
`
const BtnWraper = styled.div`
margin-top: 50px;
@media screen and (min-width: 768px){
  margin-top: 0;
  margin-left: auto;
   }
   @media screen and (min-width: 1000px){
  margin-top: 200px;
  margin-left: 0;
   }
`

const QuestionItem = styled.li`
position: relative;
cursor: pointer;
height: 120px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.25);
  padding: 48px 0 24px 0;
  overflow: hidden;

  @media screen and (min-width: 768px){
    height: 130px;
  }
  &.active{
    border-bottom: solid 1px rgba(255, 255, 255, 1);
    height: fit-content;
  }
  &.active h3{
    color: ${({ theme }) => theme.colors.colorText};
  }
  & h3{
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    /* font-size: 32px; */
    font-size: clamp(12px, 1vw + 1rem, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: clamp(20px, 4vw + 1rem, 40px);
    margin-bottom: 36px;
    width: 80%;
  }
 & button {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 60px;
    right: 0;
    background-color: transparent;
    border: none;
    background-image: url('/icons/+.svg');
    background-repeat: no-repeat;
    background-position: center;
 } 
 &.active button{
    background-image: url('/icons/-.svg');
 }
`
export {
    QuestionSection,
    ContentWraper,
    PartWraper,
    BtnWraper,
    QuestionItem
}