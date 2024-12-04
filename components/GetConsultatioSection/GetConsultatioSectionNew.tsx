import ArrowButton from "../Buttons/ArrowButton";
import Container from "../Container/Container";
import styled from "styled-components";

export default function GetConsultatioSectionNew() {
  return (
    <>
      <ConsutationSection>
        <Container>
          <ContentWraper>
            <FirstText>Need IT Solutions?</FirstText>
            <Wraper>
              <SecondText>Let’s</SecondText>
              <ThirdText>start now.</ThirdText>
            </Wraper>
            <ArrowButton
              text="FREE CONSULTATION"
              handler={() => {
                console.log("click");
              }}
            />
          </ContentWraper>
        </Container>
      </ConsutationSection>
    </>
  );
}

const ConsutationSection = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.darckBackground};
  z-index: 2;
  position: relative;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  @media screen and (min-width: 768px) {
    padding: 40px 0 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 0px 0 200px 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;

const FirstText = styled.div`
  color: #fff;
  font-family: "Space Grotesk";
  font-size: clamp(50px, 5vw + 1rem, 100px);
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: clamp(60px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 900px) {
    font-size: clamp(80px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 1200px) {
    font-size: clamp(90px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;
const SecondText = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: "Space Grotesk";
  margin-bottom: 1px;

  font-size: clamp(50px, 5vw + 1rem, 100px);
  font-weight: 700;

  @media screen and (min-width: 600px) {
    font-size: clamp(60px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 900px) {
    font-size: clamp(80px, 5vw + 1rem, 100px);
    margin-bottom: 4px;
  }
  @media screen and (min-width: 1200px) {
    font-size: clamp(90px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;

const ThirdText = styled.div`
  color: #fff;
  font-family: Poppins;

  font-size: clamp(50px, 5vw + 1rem, 100px);
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  margin-left: 14px;

  @media screen and (min-width: 600px) {
    font-size: clamp(60px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 900px) {
    font-size: clamp(80px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 1200px) {
    font-size: clamp(90px, 5vw + 1rem, 100px);
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
    margin-left: 27px;
  }
`;

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ContentWraper = styled.div`
  position: relative;
  & button {
    margin-top: 50px;
  }
`;
