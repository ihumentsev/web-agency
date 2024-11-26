import styled from "styled-components";

const SectionCase = styled.section`
  padding: 100px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* background-image: url('/grayBack.svg'); */
  background-image: url('/layered-waves-haikei.svg');
  background-repeat: no-repeat;
  background-size: cover;
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
  padding-top: 100px;
  @media screen and (min-width: 768px){
    padding-top: 0px;
  }
`
const CaseList = styled.ul`
display: grid;
grid-template-columns: 1fr; 
  gap: 30px; 
  width: 100%;
  height: fit-content; 
  justify-content: space-between; 
  @media screen and (min-width: 768px){
    grid-template-columns: 350px 350px;
  }
  @media screen and (min-width: 900px){
    grid-template-columns: 420px 420px;
  }
  @media screen and (min-width: 1080px){
    grid-template-columns: 500px 500px;
  }
  @media screen and (min-width: 1200px){
    grid-template-columns: 580px 580px;
  }
  @media screen and (min-width: 1400px){
    grid-template-columns: 600px 600px;
  }
  @media screen and (min-width: 1440px){
    grid-template-columns: 680px 680px;
  }
  @media screen and (min-width: 1560px){
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`
const CaseItem = styled.li`
position: relative;
  display: flex;
  border-radius: 50px; 
  text-align: center;
  background-color: #D9D9D9;
  overflow: hidden;
  width: 100%;
  height: 300px;
   &:first-child{ 
    grid-column: 1 / 2; 
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 1 / 2;           
        grid-row: 1 / 3; 
       align-self: self-end;
       height: 420px;
    }
    @media screen and (min-width: 1000px){
       
       height: 460px;
    }
    /* @media screen and (min-width: 1440px){
        height: 600px;
    } */
    @media screen and (min-width: 1560px){
        height: 680px;
    }
    
   }
   &:nth-child(2){
    grid-column: 1 / 2; 
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 2 / 3;            
        grid-row: 1 / 2;
        /* width: 300px; */
        height: 300px;
    }
    @media screen and (min-width: 1000px){
       
       height: 320px;
    }
    /* @media screen and (min-width: 1440px){
        height: 400px;
    } */
    @media screen and (min-width: 1560px){
        height: 460px;
    }
   }
   &:last-child{
    
    grid-column: 1 / 2; 
    grid-row: auto;
    @media screen and (min-width: 768px){
        grid-column: 2 / 3;            
        grid-row: 2 / 3;
        height: 300px;
    & .last{
        
        & h3{
            font-size: 30px;
        }
    }
    }
    @media screen and (min-width: 1000px){
       
       height: 300px;
    }
    /* @media screen and (min-width: 1440px){
        height: 380px;
    } */
    @media screen and (min-width: 1560px){
        height: 360px;
    }
    
   }


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
bottom: 0px;
left: 0px;
width: 100%;
padding: 30px;
background: linear-gradient(
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.1) 15%,
    rgba(0, 0, 0, 0.2) 25%,  
    rgba(0, 0, 0, 0.8) 95%
    
  );
@media screen and (min-width: 468px){
    /* bottom: 25px;
    left: 25px; */
}
& p{
    color:  #fff;
font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: start;
margin: 0;
}
& h3{
color:  #fff;
font-size: 56px;
font-size: clamp(10px, 2vw + 1rem, 56px);
font-weight: 700;
line-height: normal;
text-align: start;
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
padding: clamp(15px, 4vw, 40px);
display: none;
transition: background 1.3s ease;
@media screen and (min-width: 468px){
    padding: clamp(10px, 4vw + 1rem, 40px);
}
& p{
    color: #FFF;
/* text-align: center; */
/* font-size: 20px; */
font-size: clamp(10px, 2vw , 20px);
font-weight: 400;
line-height: clamp(15px, 3vw , 30px); 
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
margin: 0;
}
& h3 {
    color:  #FFF;
/* text-align: center; */
/* font-size: 100px; */
font-size: clamp(12px, 3vw + 1rem, 100px);
font-weight: 700;
line-height: clamp(20px, 5vw + 1rem, 110px);
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