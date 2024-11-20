import styled from "styled-components";

export default function Container({children}){
    return (
        <ContainerBox>{children}</ContainerBox>
    )
}

const ContainerBox = styled.div`
    padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 600px) {
    width: 600px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 900px) {
    width: 900px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1560px) {
    width: 1560px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1760px) {
    width: 1760px;
    padding-left: 45px;
    padding-right: 45px;
  }
  @media screen and (min-width: 1860px) {
    width: 1860px;
    padding-left: 50px;
    padding-right: 50px;
  }
`