import Container from "../Container/Container";
import styled from "styled-components";
import GoBack from "../GoBack/GoBack";

export default function AboutHero() {
  return (
    <>
      <AboutUsSection data-section="dark" className="dark-section">
      <GoBack prevPath={{}} title="About us" /> 
        <Container>
          <h2>About Us</h2>
          <ContentWraper>
            <h3>We believe that technology can change the world.</h3>
            <p>
              That&#39;s why we&#39;re committed to delivering innovative IT
              solutions to businesses of all sizes. Our team of experienced
              professionals is dedicated to helping you achieve your goals and
              thrive in a rapidly evolving digital landscape.
              <br /> <br />
              We are an IT company that offers a wide range of services to help
              businesses succeed in the digital world. Our expertise includes
              web development, mobile development, cloud computing,
              cybersecurity, and digital marketing. We provide customized
              solutions to meet the unique needs of each of our clients’
              business from every size and nation.
            </p>
          </ContentWraper>
        </Container>
      </AboutUsSection>
    </>
  );
}

const AboutUsSection = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.darckBackground};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-image: url('/fon1.svg');
  background-repeat: no-repeat;
  background-size: cover;
  
  @media screen and (min-width: 768px) {
    padding: 0 0 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 0 0 200px 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-style: normal;
    font-weight: 700;
    line-height: clamp(30px, 6vw + 2rem, 110px);
    line-height: clamp(30px, 6vw + 2rem, 110px);
    text-align: center;
    margin-top: 40px;
    @media screen and (min-width: 768px) {
      text-align: start;
      max-width: 350px;
    }
    @media screen and (min-width: 1000px) {
      max-width: fit-content;
    }
  }
`;

const ContentWraper = styled.div`
  
  padding: 50px 0;
  & h3 {
    display: flex;
    align-items: last baseline;
    color: ${({ theme }) => theme.colors.colorText};
    font-size: clamp(24px, 3vw + 1rem, 56px);
    max-width: 745px;
    /* margin-right: 250px; */
    text-align: center;
    
    @media screen and (min-width: 768px) {
        text-align: start;
    }
  }
  & p {
    margin: 0;
    /* width: 50%; */
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 14px;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-align: center;
    margin-left: auto;
    margin-top: 30px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      max-width: 680px;
      text-align: start;
    }
  }
  @media screen and (min-width: 900px){
    display: flex;
    padding: 100px 0;
  }
`;
