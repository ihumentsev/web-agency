import styled from "styled-components";

const SectionTech = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  background-image: url("/back.png");
  background-size: cover;
  /* background-repeat: no-repeat; */
  @media screen and (min-width: 768px) {
    padding: 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 200px 0;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.darkText};
    font-family: ${({ theme, locale }) =>
      theme.fontsTitle[locale] || theme.fontsTitle.default};
    /* font-size: 50px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(30px, 6vw + 2rem, 110px);
    line-height: clamp(30px, 6vw + 2rem, 110px);
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: start;
      max-width: 350px;
    }
    @media screen and (min-width: 1000px) {
      max-width: fit-content;
    }
  }
`;

const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px){
    flex-direction: row;
  }
`;

const TitleWraper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  /* justify-content: center; */
  /* align-items: center; */
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
    flex-direction: column;
  }
  & p {
    max-width: 500px;
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      max-width: 400px;
      text-align: start;
    }
  }
  & button {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.darkText};
    color: ${({ theme }) => theme.colors.darkText};
    width: fit-content;
    height: fit-content;
    /* margin-left: auto; */
    margin-top: 20px;
    /* margin-right: auto;
    margin-left: auto; */
    @media screen and (min-width: 1200px) {
      margin-left: 0;
      margin-top: 40px;
      /* margin-top: 0; */
      /* margin-right: 0; */
    }
  }
`;
const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  @media screen and (min-width: 768px){
    gap: 30px;
  }
  & li {
    padding: 5px 10px;
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid var(--White, #fff);
    /* background: var(--Dark-Blue, #11112B); */
    border-color: ${({ theme }) => theme.colors.darkText};
    color: ${({ theme }) => theme.colors.darkText};
    width: fit-content;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    line-height: 26px; /* 162.5% */
    @media screen and (min-width: 768px){
      font-size: 16px;
      padding: 10px 15px;
    }
    &.active {
      background: ${({ theme }) => theme.colors.darckBackground};
      box-shadow: 0 0 20px 10px rgba(17, 17, 43, 0.5);
      color: ${({ theme }) => theme.colors.colorText};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.darckBackground};
      box-shadow: 0 0 20px 10px rgba(17, 17, 43, 0.5);
      color: ${({ theme }) => theme.colors.colorText};
    }
  }
  @media screen and (min-width: 1200px){
    justify-content: center;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
`;
const TechItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 120px;
  border-radius: 25px;
  border: 1px solid  rgba(255, 255, 255, 0.9);
  background: 
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
  align-items: center;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
@media screen and (min-width: 480px){
  height: 170px;
  width: 200px
}
@media screen and (min-width: 600px){
  width: 180px
}
@media screen and (min-width: 768px){
  width: 230px
}
@media screen and (min-width: 900px){
  width: 200px
}
@media screen and (min-width: 1080px){
  width: 180px
}
  &:hover {
    background: ${({ theme }) => theme.colors.darckBackground};
    box-shadow: 0 0 20px 10px rgba(17, 17, 43, 0.5);
    color: ${({ theme }) => theme.colors.lightText};
  }

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 10px;

    & img {
      display: block;
      width: 100%;
      /* max-height: 100%; */
      height: 60%;
      object-fit: contain;
      margin-top: auto;
      flex-grow: 0; /* Убирает вытеснение заголовка */
      filter: brightness(0) saturate(100%);
      transition: filter 0.3s ease;
      @media screen and (min-width: 480px){
      height: 80px;
    }
    }
    
  }

  & h3 {
    width: 100%;
    padding: 5px 0;
    text-align: center;
    border-radius: 50px;
    /* background-color: #11112B; */

    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%); */
    margin-top: auto; 
    flex-shrink: 0; /* Убирает сжатие заголовка */
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkText};
    @media screen and (min-width: 480px){
      font-size: 18px;
    }
  }
  &:hover h3 {
    color: ${({ theme }) => theme.colors.lightText};
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  &:hover img {
    filter: none;
    transform: scale(1.3);
  }
`;

const ListWraper = styled.div`
  /* margin-left: 150px; */
  margin-top: 80px;
  @media screen and (min-width: 1200px) {
    margin-left: auto;
    margin-top: 40px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 58%;
  }
`;

export {
  SectionTech,
  ContentWraper,
  TitleWraper,
  FilterList,
  TechList,
  TechItem,
  ListWraper,
};
