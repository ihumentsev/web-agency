import styled from "styled-components";


const Section = styled.section`
padding: 100px 0 150px 0;
/* background-color: #D5D9E5; */
background-image: url('/back.png');
background-size: cover;
@media screen and (min-width: 768px ){
        padding: 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 200px 0 250px 0;
    }


`

const WraperTitle = styled.div`
text-align: center;


& :nth-child(1){
    font-family: "Space Grotesk";
/* font-size: 50px; */
font-size: clamp(24px, 5vw + 1rem, 100px);
font-style: normal;
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px);
color: #11112B;
/* @media screen and (min-width: 480px) {
    font-size: 60px;
} */
/* @media screen and (min-width: 600px) {
    font-size: 70px;
}
@media screen and (min-width: 900px) {
    font-size: 75px;
} */
}
& :nth-child(2){
    display: inline-block;
    font-family: Poppins;
    /* font-size: 50px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
font-style: italic;
font-weight: 300;
line-height: clamp(30px, 6vw + 2rem, 110px);
color: var(--Dark-Blue, #11112B);
margin-left: 20px;
/* @media screen and (min-width: 480px) {
    font-size: 60px;
}
@media screen and (min-width: 600px) {
    font-size: 70px;
}
@media screen and (min-width: 900px) {
    font-size: 75px;
} */
}

& :nth-child(4){
    font-family: "Space Grotesk";
    /* font-size: 50px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
font-style: normal;
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px);
color: #11112B;
/* @media screen and (min-width: 480px) {
    font-size: 60px;
}
@media screen and (min-width: 600px) {
    font-size: 70px;
}
@media screen and (min-width: 900px) {
    font-size: 75px;
} */

}
& .change {
color: #f3f3f3;

text-shadow: 
    -1px -1px 0 #11112B, 
    1px -1px 0 #11112B,  
    -1px 1px 0 #11112B,  
    1px 1px 0 black;
-webkit-text-stroke-color:  #11112B;
font-family: "Space Grotesk";
/* font-size: 50px; */
font-size: clamp(24px, 5vw + 1rem, 100px);
font-style: normal;
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px);
margin-right: 30px;
/* @media screen and (min-width: 480px) {
    font-size: 60px;
}
@media screen and (min-width: 600px) {
    font-size: 70px;
}
@media screen and (min-width: 900px) {
    font-size: 75px;
} */
}
`

const SectionText = styled.p`
color: #11112B;
text-align: center;

/* Paragraph */
/* font-family: Poppins; */
font-size: 20px;
/* font-style: normal; */
font-weight: 400;
line-height: 30px; /* 150% */
max-width: 855px;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
`

const SuccessList = styled.ul`
padding: 0;
  margin: 0;
  display: flex;     
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 160px;
  & li{
  text-align: center;
  padding: 0 20px;   /* Пространство вокруг элементов */
  position: relative;
  &:not(:last-child)::after {
    content: "";
  position: absolute;
  bottom: 75%;         /* Линия будет на середине между элементами */
  left: 100%;          /* Линия начинается после элемента */
  width: 336px;         /* Длина линии */
  height: 1px;         /* Толщина линии */
  background-color: black; /* Цвет линии */
}
& h3{
    color: var(--Dark-Blue, #11112B);
text-align: center;

/* Heading 5 */
font-family: "Space Grotesk";
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
& p{
    color: var(--Dark-Blue, #11112B);
text-align: center;

/* Paragraph */
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
}
  }
`
export{
    Section,
    WraperTitle,
    SectionText,
    SuccessList

}