import styled from "styled-components";


const SectionServices = styled.section`
padding: 0 0 100px 0;
    background-color: ${({ theme }) => theme.colors.darckBackground};
    z-index: 2;
    /* margin-top: -2.5rem;
        margin-bottom: -2.5rem; */
    position: relative;
    @media screen and (min-width: 768px ){
        padding:  0 0 150px 0;
    }
    @media screen and (min-width: 1400px ){
        padding: 0 0 200px 0;
    }
    h2{
        color: ${({ theme }) => theme.colors.lightText};
        /* font-size: 50px; */
        font-size: clamp(24px, 5vw + 1rem, 100px);
        font-weight: 700;
        line-height: clamp(30px, 6vw + 2rem, 110px);
        text-align: center;
        margin-top: 40px;
        @media screen and (min-width: 768px){
            margin-top: 0;
            text-align: start;
        }
    }
`

const ServicesList = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`
const ServicesItem = styled.li`
  
  
  width: 100%;
  height: 320px;
  border-radius: 25px;
  border: 1px solid  rgba(255, 255, 255, 0.20);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%);
  backdrop-filter: blur(5px);
  transition: background 0.3s ease;
  @media screen and (min-width: 600px){
    width: 275px;
  }
  @media screen and (min-width: 768px){
    width: 350px;
  }
  @media screen and (min-width: 900px){
    width: 270px;
  }
  @media screen and (min-width: 1080px){
    width: 330px;
  }
  @media screen and (min-width: 1200px){
    width: 370px;
  }
  @media screen and (min-width: 1440px){
    width: 440px;
    height: 440px;
    
  }
  @media screen and (min-width: 1560px){
    width: 470px;
    height: 480px;
  }
  @media screen and (min-width: 1600px){
    width: 470px;
    height: 480px;
  }
  @media screen and (min-width: 1860px) {
    width: 520px;
    height: 520px;
  }
  &:hover{
    background-color:  #92DEED;
    box-shadow: rgb(146, 222, 237) 0px 0px 20px;
  }
  &:hover .btn{
    background-color: #FFF;
    color: #92DEED !important;
  }
  /* &:hover svg{
    color: #92DEED !important;
  } */
  & a{
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px){
    padding: 45px;
  }
  @media screen and (min-width: 1600px){
    padding: 50px;
  }
  }
  & h3{
    color: ${({ theme }) => theme.colors.lightText};
    /* font-size: 56px; */
    font-size: clamp(20px, 5vw + 1rem, 56px);
    font-weight: 700;
    line-height: normal;
    max-width: 356px;
    @media screen and (min-width: 600px){
        font-size: 28px
    }
    @media screen and (min-width: 768px){
        font-size: 34px
    }
    @media screen and (min-width: 900px){
        font-size: 28px
    }
    @media screen and (min-width: 1080px){
        font-size: 34px
    }
    @media screen and (min-width: 1200px){
        font-size: 36px
    }
    @media screen and (min-width: 1400px){
        font-size: 46px
    }
    @media screen and (min-width: 1560px){
        font-size: 56px
    }

  }
  & p{
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 20px;
    font-size: clamp(12px, 3vw , 20px);
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-top: 10px;
    @media screen and (min-width: 600px){
        font-size: 10px
    }
    @media screen and (min-width: 900px){
        font-size: 10px
    }
    @media screen and (min-width: 1400px){
        font-size: 14px
    }
    @media screen and (min-width: 1440px){
        font-size: 16px
    }
    @media screen and (min-width: 1600px){
        font-size: 18px
    }
  }
  & .text-wraper{
    margin-top: auto;
  }
`
const IconWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .btn{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      padding: 10px;
      transition: all 0.3s ease;

      @media screen and (min-width: 1440px){
        width: 80px;
      height: 80px;
      padding: 15px;
      }
    }
 
`
export {
    SectionServices, ServicesList, ServicesItem, IconWraper
}