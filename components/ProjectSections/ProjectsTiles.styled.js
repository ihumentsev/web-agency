import styled from "styled-components";

const ProjectsSection = styled.section`
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
      
`
const TitleWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        }
    & h2{
        color: ${({ theme }) => theme.colors.lightText};;
        /* font-size: 50px; */
        font-size: clamp(24px, 5vw + 1rem, 100px);
        font-weight: 700;
        line-height: clamp(30px, 6vw + 2rem, 110px);
        text-align: center;
        @media screen and (min-width: 768px){
            
            text-align: start;
        }
    }
    & button{
        margin: 0;
        margin-left: 0;
        margin-top: 20px;
        @media screen and(min-width: 768px){
            margin-left: auto;
        }
    }
`

const SectionText = styled.p`
color: ${({ theme }) => theme.colors.lightText};;
font-size: 20px;
font-weight: 400;
line-height: 30px; 
max-width: 100%;
margin-top: 14px;
text-align: center;
@media screen and (min-width: 768px){
    max-width: 400px;
    font-size: 14px;
    text-align: start;
        }
`
const ProjectsList = styled.ul`
display: flex;
flex-direction: column;
gap: 30px;
margin-top: 80px;
@media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: center;
}

`
const ProjectsItem = styled.li`
position: relative;
width: 100%;
border-radius: 50px;
overflow: hidden;
@media screen and (min-width: 768px){
    width: 795px;
}

&:hover {
    box-shadow: 0 0 20px rgba(146, 222, 237, 1);
}
&:hover .backdrop {
    /* transform: translateY(0%); */
    opacity: 1;
  }
& img {
    display: block;
    width: 100%;
    height: 100%;
}
`
const DescriptionWraper = styled.div`
position: absolute;
width: 100%;
bottom: 0px;
left: 0;
padding: 5px 20px 20px 30px;
background: linear-gradient(
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.1) 15%,
    rgba(0, 0, 0, 0.2) 25%,  
    rgba(0, 0, 0, 0.8) 95%
    
  );
@media screen and (min-width: 480px){
    padding: 10px 50px 50px 50px;
}
& p{
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
    margin: 0;
}

& h3{
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
    @media screen and (min-width: 480px){
        font-size: 56px;
}
@media screen and (min-width: 768px){
        font-size: 40px;
}
}
`

const DescriptionWraperHover = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #92deed;
/* transform: translateY(100%); */
opacity: 0;
transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
display: flex;
flex-direction: column;
justify-content: center;
& .sub-title{
    color: ${({ theme }) => theme.colors.lightText};
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; 
    letter-spacing: 5px;
    text-transform: uppercase;
    margin: 0;
    @media screen and (min-width: 768px){

    }
}
& h3{
    color: ${({ theme }) => theme.colors.lightText};
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px; 
    max-width: 350px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px){
        font-size: 70px;
        line-height: 110px; 
        margin-top: 48px;
    }
}
& .backdrop-text{
    color: ${({ theme }) => theme.colors.lightText};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px; 
    max-width: 70%;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px){
        font-size: 20px;
    }
}
& button{
    padding: 19px 60px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightText};
    border: none;
    cursor: progress;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0 auto; 
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px; 
    transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Начальная тень */
  @media screen and (min-width: 768px){
    margin: 80px auto 0 auto; 
  }
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Увеличиваем тень */
    transform: translateY(-5px); /* Лёгкое движение вверх */
    background-color: ${({ theme }) => theme.colors.lightBackground} /* Слегка меняем цвет фона */
  }

  &:active {
    transform: translateY(0); /* Возвращаем кнопку на место при нажатии */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Возвращаем тень */
  }
}
`
export {
    ProjectsSection,
    TitleWraper,
    SectionText,
    ProjectsList,
    ProjectsItem,
    DescriptionWraper,
    DescriptionWraperHover
}