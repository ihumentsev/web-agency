import styled from "styled-components";

const HowSection = styled.section`
    padding: 100px 0;
    background-color: ${({ theme }) => theme.colors.darckBackground};
    z-index: 2;
    /* margin-top: -2.5rem;
        margin-bottom: -2.5rem; */
    position: relative;
    @media screen and (min-width: 768px ){
        padding: 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 200px 0;
    }
    & h2{
        color: ${({ theme }) => theme.colors.lightText};;
        /* font-size: 50px; */
        font-size: clamp(24px, 5vw + 1rem, 100px);
        font-weight: 700;
        line-height: clamp(30px, 6vw + 2rem, 110px);
        text-align: center;
       
    } 
`

const HowList = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 200px 0;
  margin-top: 200px;
  @media screen and (min-width: 1400px){
    gap: 300px 0;
    margin-top:350px;
  }
  
`
const HowItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
  position: relative;
  /* margin: 40px 0; */
  &::before {
  content: '';
  position: absolute;

  top: -160px; 
  left: 50%;
  width:30px;
  height: 120px;
  background-image: url('/icons/line.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(-50%);
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(318deg) brightness(102%) contrast(104%);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 1440px){
    height: 200px;
    top: -260px; 
  }
}
&.active::before {
    filter: none;
}
& div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 136px;
    border-radius: 15px;
    border: 0.563px solid  rgba(255, 255, 255, 0.20);
    background:  linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%);
    backdrop-filter: blur(2.813620090484619px);
    & img {
        width: 50%;
    }
    @media screen and (min-width: 1400px){
        width: 154px;
        height: 157px;
}
}
& h3{
    color:  #FFF;
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 40px;
margin-top: 50px;
@media screen and (min-width: 480px){
    font-size: 22px;
}
@media screen and (min-width: 900px){
    font-size: 28px;
}
@media screen and (min-width: 1400px){
    font-size: 32px;
    margin-top: 70px;
}
}

& h4{
    color:  #92DEED;
text-align: center;
font-family: "Space Grotesk";
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal; 
margin-top: 30px;
@media screen and (min-width: 480px){
    font-size: 32px;
}
@media screen and (min-width: 900px){
    font-size: 44px;
}
@media screen and (min-width: 1400px){
    font-size: 56px;
    margin-top: 32px;
}
}
& p{
    /* color:  #FFF; */
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
width: 60%;
margin-top: 20px;
@media screen and (min-width: 480px){
    font-size: 12px;
}
@media screen and (min-width: 900px){
    font-size: 16px;
    width: 420px
}
@media screen and (min-width: 1400px){
    font-size: 20px;
    margin-top: 48px;
}
}
`
export {HowSection, HowList, HowItem}