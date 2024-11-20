import styled from "styled-components";

const BenefitsSection = styled.section`
background-color: ${({ theme }) => theme.colors.darckBackground};
position: relative;
z-index: 2;
padding: 100px 0 100px 0;
@media screen and (min-width: 768px ){
        padding: 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 200px 0;
    }
& h2{
    
    /* font-size: 40px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
font-weight: 700;
line-height: clamp(30px, 6vw + 2rem, 110px);
@media screen and (min-width: 768px){
    /* font-size: 90px; */
    
}
@media screen and (width: 1400px){
    /* font-size: 70px; */
}
}
& h3{
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
    font-size: 24px;
font-weight: 600;
line-height: 40px;
text-align: center;
@media screen and (min-width: 768px){
    font-size: 26px;
    text-align: start;
}
@media screen and (width: 1400px){
    font-size: 30px;
}
}
& p{
    color: ${({ theme }) => theme.colors.lightText};
font-size: 12px;
font-weight: 400;
line-height: 30px; 
text-align: center;
@media screen and (min-width: 480px){
    font-size: 18px;
}
@media screen and (min-width: 768px){
    text-align: start;
}
/* @media screen and (min-width: 900px){
    font-size: 20px;
} */
@media screen and (min-width: 1000px){
    font-size: 16px;
}

@media screen and (min-width: 1216px){
    font-size: 20px;
}
@media screen and (min-width: 1400px){
    font-size: 20px;
}
@media screen and (min-width: 1560px){
    font-size: 20px;
}
@media screen and (min-width: 1600px){
    font-size: 20px;
}
}
`
const ThumbImg = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 140px;
& img{
    width: 100%;
    height: 100px;
    @media screen and (min-width: 768px){
        width: auto;
}
}
`
const BenefitsList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 80px;
gap: 60px;
`
const BenefitsItem = styled.li`
width: 100%;
@media screen and (min-width: 768px){
    width: 330px;
}
@media screen and (min-width: 900px){
    width: 380px;
}
@media screen and (min-width: 1000px){
    width: 380px;
}
@media screen and (min-width: 1080px){
    width: 450px;
}

@media screen and (min-width: 1200px){
    width: 250px;
}
@media screen and (min-width: 1216px){
    width: 250px;
}
@media screen and (min-width: 1400px){
    width: 220px;
}
@media screen and (min-width: 1560px){
    width: 300px;
}
@media screen and (min-width: 1600px){
    width: 344px;
}

`
export{
    BenefitsSection,
    BenefitsList,
    BenefitsItem,
    ThumbImg
}