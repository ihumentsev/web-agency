import ArrowButton from "../Buttons/ArrowButton";
import Container from "../Container/Container";
import styled from "styled-components";

export default function GetConsultatioSection(){
    return (
        <>
        <ConsutationSection>
            <Container>
                <ContentWraper>
                    <FirstText>READY F<span></span> R<span className="empty"></span> THE</FirstText>
                    <SecondText><span>NEXT</span>LEVEL?</SecondText>
                    <ArrowButton text="FREE CONSULTATION" handler={()=>{console.log("click");
                    }}/>
                </ContentWraper>
            </Container>
        </ConsutationSection>
        </>
    )
}

const ConsutationSection = styled.section`
    
    padding: 50px 0 100px 0;
    background-color: ${({ theme }) => theme.colors.darckBackground};
    z-index: 2;
    position: relative;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    @media screen and (min-width: 768px ){
        padding: 40px 0 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 0px 0 200px 0;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }
`

const FirstText = styled.div`
    color:  #FFF;
font-family: "Space Grotesk";
/* font-size: 200px; */
font-size: clamp(50px, 5vw + 1rem, 200px);
font-weight: 700;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
@media screen and (min-width: 600px ){
    font-size: clamp(90px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 900px ){
    font-size: clamp(110px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1200px ){
    font-size: clamp(150px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1440px ){
    font-size: clamp(180px, 5vw + 1rem, 200px);
   }
& span {
    display: inline-block;
    /* width: 211px; */
    width: clamp(56px, 5vw , 211px);
    /* height: 146px; */
    height: clamp(38px, 5vw , 146px);
    border-radius: 65px;
    border: 5px solid  #FFF;
    margin-left: 2px;
    margin-right: 2px;
    @media screen and (min-width: 600px ){
        width: clamp(130px, 5vw , 211px);
        height: clamp(70px, 5vw , 146px);
    }
    @media screen and (min-width: 1200px ){
        width: clamp(170px, 5vw , 211px);
        height: clamp(110px, 5vw , 146px);
        border-width: 10px;
   }
   @media screen and (min-width: 1440px ){
        width: clamp(190px, 5vw , 211px);
        height: clamp(136px, 5vw , 146px);
        border-width: 15px;
   }
}
& .empty{
    width: 0;
    height: 0;
    border: none;
    @media screen and (min-width: 768px ){
        margin-right: 20px;
    }
    @media screen and (min-width: 1440px ){
        margin-right: 30px;
   }
}
`
const SecondText = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
   background: linear-gradient(97deg, #92DEED 30.1%, #FFF 94.6%);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent; 
   font-family: "Space Grotesk";
   /* font-size: 200px; */
   font-size: clamp(50px, 5vw + 1rem, 200px);
   font-weight: 700;
   line-height: normal;
   @media screen and (min-width: 600px ){
    font-size: clamp(90px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 900px ){
    font-size: clamp(110px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1200px ){
    font-size: clamp(150px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1440px ){
    font-size: clamp(180px, 5vw + 1rem, 200px);
   }
   & span {
    display: inline-block;
    color:  #92DEED;
    font-family: Poppins;
    /* font-size: 190px; */
    font-size: clamp(49px, 5vw + 1rem, 190px);
    font-style: italic;
    font-weight: 300;
    /* line-height: normal; */
    margin-right: 14px;
    @media screen and (min-width: 600px ){
        font-size: clamp(85px, 5vw + 1rem, 190px);
        margin-right: 30px;
    }
    @media screen and (min-width: 900px ){
    font-size: clamp(100px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1200px ){
    font-size: clamp(140px, 5vw + 1rem, 200px);
   }
   @media screen and (min-width: 1440px ){
    font-size: clamp(180px, 5vw + 1rem, 200px);
    margin-right: 60px;
   }
   }
`

const ContentWraper = styled.div`
  position: relative;
  & button{
    margin-top: 50px;
    /* position: absolute;
    bottom: 100px;
    right: 150px; */
  }
`