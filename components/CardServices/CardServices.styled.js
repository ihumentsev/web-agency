import styled from "styled-components";

const CardServicesSection = styled.section`
    background-color: ${({ theme }) => theme.colors.lightBackground};
    padding: 100px 0 100px 0;
    @media screen and (min-width: 768px ){
        padding: 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 200px 0;
    }
`

const ContentWraper = styled.div`
display: flex;
flex-direction: column-reverse;
@media screen and (min-width: 1400px){
    flex-direction: row;
}
`

const ListWraper = styled.div`

 /* width: 80%; */
 
 & ul{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: fit-content;
    margin-top: 60px;
    @media screen and (min-width: 600px){
        height: fit-content;
        margin-top: 40px;
    }
    @media screen and (min-width: 768px){
        height: 900px;
        margin-top: 40px;
    }
 }
`

const ServicesItem = styled.li`
  & a {
    display: flex;
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 25px;
    border: 1px solid var(--Stroke-Gradient, rgba(255, 255, 255, 0.20));
    background: var(
      --Gradient-White,
      linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%)
    );
    padding: 30px;
    align-items: flex-end;
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Плавность */
    
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    container-type: inline-size;
    /* Адаптивность контейнера */
    @media screen and (min-width: 480px) {
      height: 230px;
    }
    @media screen and (min-width: 768px) {
      width: 350px;
      height: 230px;
    }
    @media screen and (min-width: 900px) {
      width: 420px;
    }
    @media screen and (min-width: 1400px){
      width: 360px;
    }
    @media screen and (min-width: 1560px){
      width: 480px;
    }
    @media screen and (min-width: 1600px){
      width: 500px;
    }
    @media screen and (min-width: 1760px){
      width: 520px;
    }

    /* Иконка */
    & div {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 40px;
      height: 40px;
      background-image: url('/icons/ArrowIconSmol.svg');
      background-size: 40px;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.6s ease;
    }

    /* Заголовок */
    & h3 {
      color: ${({ theme }) => theme.colors.darkText};
      font-size: clamp(28px, 10vw, 50px); /* Плавное масштабирование шрифта */
      font-weight: 700;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: clamp(28px, 6vw, 50px); 
      }
      @media screen and (min-width: 1400px) and (max-width: 1560px){
      font-size: 42px;
    }
    }

    /* Hover эффекты */
    &:hover div {
      opacity: 1;
      transform: translateX(500%);
  
  /* Современное поведение */
  @supports (container-type: inline-size) {
    transform: translateX(calc(100cqw - 100%));
  } 
  /* Относительно ширины родителя */
    }

    &:hover h3 {
      color: ${({ theme }) => theme.colors.lightText};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.darckBackground};
      box-shadow: 0 0 20px 10px rgba(17, 17, 43, 0.5);
    }
  }
`;



const TitleWraper = styled.div`
max-width: 100%;
align-items: center;
display: flex;

flex-direction: column;
justify-content: center;
@media screen and (min-width: 768px){
       margin-left: 0;
       flex-direction: row;
       width: 100%;
}
@media screen and (min-width: 1400px){
       margin-left: auto;
       /* margin-right: auto; */
       flex-direction: column;
       width: auto;
}
@media screen and (min-width: 1400px){
  margin-right: auto;
}

& h2{
    color: ${({ theme }) => theme.colors.darkText};
/* font-size: 50px; */
font-size: clamp(24px, 5vw + 1rem, 100px);
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px); 
text-align: center;
@media screen and (min-width: 768px){
    text-align: start;
    /* font-size: 90px; */
    }

}
& p{
    max-width: 500px;
    color: ${({ theme }) => theme.colors.darkText};
font-size: 20px;
font-weight: 400;
line-height: 30px; /* 150% */
text-align: center;
@media screen and (min-width: 768px){
    font-size: 14px;
    max-width: 400px;
    text-align: start;
    }
}
& button{
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.darkText};
    color: ${({ theme }) => theme.colors.darkText};
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    @media screen and (min-width: 768px){
      margin-top: 0;
      margin-right: 0;
    }
}
`

export {CardServicesSection, ContentWraper, ListWraper, ServicesItem, TitleWraper}