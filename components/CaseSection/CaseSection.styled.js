import styled from "styled-components";

const SectionCase = styled.section`
  padding: 100px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* background-image: url('/fon1.svg');
  background-repeat: no-repeat;
  background-size: cover; */
  @media screen and (min-width: 768px) {
    padding: 150px 0 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 200px 0 200px 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  & h2 {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.lightText};

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
`
const ContentWraper = styled.div`
  position: relative;
`
const CaseList = styled.ul`
display: grid;
grid-template-columns: 1fr; /* Одна колонка на маленьких экранах */
/* grid-template-rows: repeat(3, auto);  */
   /* Левая и правая колонки */
  /* grid-template-rows:  1fr;  */
  gap: 30px; /* Отступы между элементами */
  width: 100%;
  height: fit-content; /* Задаём высоту для визуального эффекта */
  border-radius: 15px;
  justify-content: space-between; 

  @media screen and (min-width: 768px){
    grid-template-columns: 795px 795px;
  }
`
const CaseItem = styled.li`
position: relative;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  border-radius: 50px; /* Скругление углов */
  text-align: center;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  */
  background-color: #D9D9D9;
  overflow: hidden;
   &:first-child{
    width: 100%; /* Полная ширина для всех элементов */
    grid-column: 1 / 2; /* Все элементы в одной колонке */
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 1 / 2;            /* Занимает всю левую колонку */
  grid-row: 1 / 3; 
  /* height: 80%;  */
  align-self: self-end;
  height: 700px;
    }
    
   }
   &:nth-child(2){
    width: 100%; /* Полная ширина для всех элементов */
    grid-column: 1 / 2; /* Все элементы в одной колонке */
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 2 / 3;            /* Занимает верхнюю правую часть */
    grid-row: 1 / 2;
    width: 795px;
    height: 480px;
    }
    
   }
   &:last-child{
    width: 100%; /* Полная ширина для всех элементов */
    grid-column: 1 / 2; /* Все элементы в одной колонке */
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 2 / 3;            /* Занимает нижнюю правую часть */
    grid-row: 2 / 3;
    width: 795px;
    height: 350px;
    }
    
   }

/* & a{
    width: 100%;
    height: 100%;
}    */
& img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover .overlay{
    display: flex;
}
`
const DescriptionWraper = styled.div`
position: absolute;
bottom: 60px;
left: 60px;
& p{
    color:  #11112B;
font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: start;
margin: 0;
}
& h3{
    color:  #11112B;
font-size: 56px;
font-weight: 700;
line-height: normal;
}
`
const OverlayItem = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
/* border: 1px solid  rgba(255, 255, 255, 0.20); */
/* background:  linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%); */
/* background: linear-gradient(0deg, #11112B 0%, rgba(17, 17, 43, 0.00) 100%); */
background: linear-gradient(
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.1) 15%,
    rgba(0, 0, 0, 0.2) 25%,  
    rgba(0, 0, 0, 0.8) 95%
    
  );
backdrop-filter: blur(5px);
/* display: flex; */
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 40px;
display: none;
transition: background 1.3s ease;
& p{
    color: #FFF;
/* text-align: center; */
font-size: 20px;
font-weight: 400;
line-height: 30px; 
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
margin: 0;
}
& h3 {
    color:  #FFF;
/* text-align: center; */
font-size: 100px;
font-weight: 700;
line-height: 110px;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
& a{
    border-radius: 10px;
    background:  #92DEED;
    color:  #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    padding: 10px 60px;
    width: fit-content;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid  rgba(255, 255, 255, 0.2);
    transition: translateY 0.3s ease, box-shadow 0.3s ease;
    &:hover{
        box-shadow: 0 0 20px rgba(146, 222, 237, 1);   
        transform: translateY(-5px);
    
    }

}
`
export{
    SectionCase, CaseList, CaseItem, ContentWraper, DescriptionWraper, OverlayItem
}