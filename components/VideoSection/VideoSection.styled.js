import styled from "styled-components";

const ThumbVideo = styled.div`
  position: relative;
  border-radius: 50px;
  height: 700px;
  /* overflow: hidden; */
  & ul {
    position: absolute;
    width: 90%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.darckBackground};
    padding: 30px 36px;
    justify-content: space-between;
    /* gap: auto; */
    z-index: 2;
    @media screen and (min-width: 1000px){
        padding: 40px 40px;
    }
    @media screen and (min-width: 1400px){
        padding: 100px 140px;
    }
  }
  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const VideoBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(24, 24, 25, 0.75);
  z-index: 1;
`;
const BenefitsItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  max-width: 25%;

  & h3 {
    color: ${({ theme }) => theme.colors.colorText};
    text-align: center;
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-style: normal;
    font-weight: 700;
    /* line-height: 30px;  */
    line-height: clamp(30px, 6vw + 2rem, 110px); 
    /* @media screen and (min-width: 480px){
      font-size: 36px;
      line-height: 50px; 
    }
    @media screen and (min-width: 600px){
      font-size: 38px;
      line-height: 52px; 
    }
    @media screen and (min-width: 768px){
      font-size: 48px;
      line-height: 52px; 
    }
    @media screen and (min-width: 900px){
      font-size: 52px;
      line-height: 52px; 
    }
    @media screen and (min-width: 1000px){
        font-size: 80px;
        line-height: 110px; 
    } */
  }
  & p{
    color: ${({ theme }) => theme.colors.lightText};
text-align: center;
font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 20px;
@media screen and (min-width: 480px){
  font-size: 18px;
  line-height: 22px;
    }
    @media screen and (min-width: 600px){
  font-size: 20px;
  line-height: 24px;
    }
    @media screen and (min-width: 900px){
  font-size: 24px;
  line-height: 26px;
    }
  }
  
`;
export { ThumbVideo, VideoBackdrop, BenefitsItem };
