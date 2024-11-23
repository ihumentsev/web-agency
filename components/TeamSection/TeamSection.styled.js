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
`
const BackdropItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 48px;
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
 

  & div {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 48px;
    height: 48px;
    background-image: url('/icons/ArrowIconSmol.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: none;
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

const TeamItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 424px;
  height: 600px;
  border-radius: 25px;
  overflow: hidden;
  transition: transform 0.6s ease;

  & a {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  & img {
    display: block;
    width: 100%;
    height: 456px;
    border-radius: 25px;
    transition: transform 0.6s ease, object-fit 0.3s ease;
  }

  &:hover {
    transform: scale(1.1); 
  }

  &:hover img {
    height: 100%;
    object-fit: cover;
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