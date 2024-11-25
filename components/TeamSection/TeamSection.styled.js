import styled from "styled-components";

const SectionTeam = styled.div`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.darckBackground};
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 200px 0;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.lightText};
    /* font-family: ${({ theme, locale }) =>
    theme.fontsTitle[locale] || theme.fontsTitle.default}; */
    /* font-size: 50px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(30px, 6vw + 2rem, 110px);
    line-height: clamp(30px, 6vw + 2rem, 110px);
    text-align: center;
    @media screen and (min-width: 768px) {
      /* text-align: start; */
      /* max-width: 350px; */
    }
    @media screen and (min-width: 1000px) {
      /* max-width: fit-content; */
    }
  }
  & .slider-container{
    padding: 20px;
    min-height: 0;
    min-width: 0;
    
   & .slick-list{
    &::before,
  &::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  pointer-events: none; /* Чтобы градиенты не мешали взаимодействию */
  z-index: 2;
  @media screen and (min-width: 768px){
    width: 300px;
  }
}
&::before {
  left: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.darckBackground}, transparent);
}
&::after {
  right: 0;
  background: linear-gradient(to left, ${({ theme }) => theme.colors.darckBackground}, transparent);
}
   }
   /* & .slick-list{
    padding-top: 40px;
   } */
   & .slick-center{
      opacity: 1;
      transform: scale(1.1); 
      /* margin-left: 40px; */
      /* margin-right: 40px; */
}
& .slick-slide {
  padding: 15px;
  transition: transform 0.6s ease;
  @media screen and (min-width: 600px){
    padding: 40px;
  }

}
& .slick-track {
  padding-top: 20px;
}
    
  }

`
const TitleWraper = styled.div`
   & p {
    text-align: center;
   }
`
const TeamList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 100px;
   margin-top: 80px;
   justify-content: center;
   @media screen and (min-width: 600px){
    gap: 20px;
   }
   @media screen and (min-width: 768px){
    gap: 40px;
   }
`
const BackdropItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
  /* flex-shrink: 0; */
  /* border-radius: 25px; */
  /* overflow: hidden; */
  /* background: linear-gradient(180deg, transparent 0%, rgba(17, 17, 43, 1) 100%); */
  transition: background 0.3s ease;
  @media screen and (min-width: 768px){
    padding: 20px;
  }

  & div {
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 35px;
    height: 35px;
    background-image: url('/icons/ArrowIconSmol.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: none;
    @media screen and (min-width: 768px){
      right: 40px;
    width: 48px;
    height: 48px;
  }
  }

  & h3 {
    /* position: relative; */
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; /* 150% */
  }
  & p {
    position: relative;
    margin: 0;
    color:  #FFF;
   font-family: Poppins;
   font-size: 32px;
   font-weight: 600;
   line-height: 40px; /* 125% */
  }
`;

const TeamItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* width: 424px; */
  /* height: 600px; */
  /* width: 100%; */
  width: 60%;
  height: 500px;
  border-radius: 25px;
  overflow: hidden;
  transition: transform 0.6s ease;
  /* border-bottom: solid 1px #fff; */
  @media screen and (min-width: 480px){
    height: 550px
  }
  @media screen and (min-width: 600px){
    /* width: 260px; */
    height: 360px
  }
  @media screen and (min-width: 768px){
    /* width: 340px; */
    height: 400px
  }
  @media screen and (min-width: 1080px){
    /* width: 400px; */
    height: 450px
  }
  @media screen and (min-width: 1200px){
    /* width: 350px; */
    height: 450px
  }
  @media screen and (min-width: 1440px){
    /* width: 400px; */
    height: 500px
  }
  & a {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  & img {
    display: block;
    width: 100%;
    /* height: 456px; */
    object-fit: cover;
    height: 70%;
    border-radius: 25px;
    transition: transform 0.6s ease, object-fit 0.3s ease;
    @media screen and (min-width: 480px){
    height: 75%
;  }

@media screen and (min-width: 600px){
  height: 65%
}
@media screen and (min-width: 1440px){
  height: 70%
}
  }

  &:hover {
    transform: scale(1.1); 
  }

  &:hover img {
    height: 100%;
    /* object-fit: cover; */
    transform: scale(1.1); 
  }

  &:hover .backdrop-item {
    background: linear-gradient(0deg, #11112B 0%, rgba(17, 17, 43, 0.00) 100%);
    /* padding: 68px 48px ; */
    /* transform: scale(0.95);  */
    & div{
        display: block;
    }
    & p{
        /* transform: scale(0.90); */
    }
  }
`;




export {
    SectionTeam, TitleWraper, TeamList, TeamItem, BackdropItem
}