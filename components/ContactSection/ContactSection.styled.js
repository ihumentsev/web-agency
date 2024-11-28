import Link from "next/link";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
 0% {
    transform: translate( -50%) scale(1);
  }
  50% {
    transform: translate( -50%) scale(1.2);
  }
  100% {
    transform: translate( -50%) scale(1);
  }
`;

const SectionContact = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.darckBackground};
  background-image: url("/new-back.svg");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  @media screen and (min-width: 600px) {
    padding-bottom: 800px;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0 550px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 50px 0 600px 0;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) =>
      theme.fontsTitle[locale] || theme.fontsTitle.default};
    /* font-size: 50px; */
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

const ContactWraper = styled.div`
  /* display: flex; */

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.colorText};
    font-size: clamp(24px, 3vw + 1rem, 56px);
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 30px;
  }
`;

const LinkWraper = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
  @media screen and (min-width: 1400px) {
    gap: 30px;
  }
`;
const ContactItem = styled(Link)`
  /* display: flex; */
  position: relative;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  padding: 10px 10px;
  align-content: end;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 900px) {
    width: 220px;
  }
  @media screen and (min-width: 1200px) {
    width: fit-content;
    padding: 40px 45px;
    /* margin-left: 30px; */
    height: 230px;
  }
  @media screen and (min-width: 1500px) {
    /* width: fit-content; */
    padding: 40px 45px;
    /* margin-left: 30px; */
    height: 264px;
  }
  @media screen and (min-width: 1600px) {
    /* width: fit-content; */
    padding: 45px 56px;
    height: 264px;
    width: 363px;
  }
  &.second-item{
    @media screen and (min-width: 1600px) {
      width : 497px;
    }
  }
  & div {
    position: absolute;
    top: 20px;

    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.2s ease-in-out;
    animation: ${pulse} 1s infinite;
    @media screen and (min-width: 1200px) {
      width: 64px;
      height: 64px;
      top: 40px;
      left: 65px;
    }
    @media screen and (min-width: 1600px) {
        left: 80px;
    }
    &.tel {
      background-image: url("/icons/Phone Icon.svg");
    }
    &.email {
      background-image: url("/icons/Email Icon.svg");
    }
  }
  & p {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) =>
      theme.fontsText[locale] || theme.fontsText.default};
    /* font-size: 24px; */
    font-size: 10px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
    @media screen and (min-width: 480px) {
      font-size: 15px;
    }
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1500px) {
      font-size: 24px;
    }
  }
  & h4 {
    color: ${({ theme }) => theme.colors.lightText};
    
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 16px;
    @media screen and (min-width: 1500px) {
      font-size: 16px;
    }
  }
  &:hover {
    box-shadow: 0 0 20px rgba(146, 222, 237, 1);
    background-color: #92deed;
  }
  &:hover div {
    /* top: 50%; */
    @media screen and (min-width: 768px) {
      left: 50%;
      animation: ${pulse} 1s infinite;
    }
  }
`;

const FormWraper = styled.div`
  position: relative;
  margin-top: 50px;
  & .map {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 15px;
    @media screen and (min-width: 600px) {
      height: 550px;
    }
    @media screen and (min-width: 900px) {
      width: 80%;
    }
    @media screen and (min-width: 1400px) {
        height: 650px;
    }
    @media screen and (min-width: 1600px) {
        width: 1093px;
        height: 745px
    }
  }
`;
const FormContact = styled.form`
  margin-top: 40px;
  width: 100%;
  height: fit-content;
  border-radius: 25px;
  background: #92deed;
  padding: 30px 10px 40px 10px;
  @media screen and (min-width: 480px) {
    /* width: 80%;
    margin: 0 auto;  */
    padding: 40px 20px 50px 20px;
  }
  @media screen and (min-width: 600px) {
    position: absolute;
    top: 280px;
    right: 0;
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    /* width: 80%; */
    /* margin: 0 0  0 auto;  */
    position: absolute;
    top: 260px;

    /* left: 624px; */
    /* width: 978px; */
    /* height: 722px; */
    padding: 40px 20px 50px 20px;
  }
  @media screen and (min-width: 900px) {
    top: 180px;
    width: 60%;
    padding: 40px 30px 50px 30px;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
  @media screen and (min-width: 1400px) {
    /* width: 550px; */
  }
  @media screen and (min-width: 1500px) {
    width: 800px;
    padding: 30px 30px 30px 30px;
  }
  @media screen and (min-width: 1600px) {
    width: 970px;
    padding: 30px 40px 30px 40px;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.darkText};
    /* font-size: 56px; */
    font-weight: 700;
    line-height: normal;
    font-size: clamp(24px, 5vw + 1rem, 56px);
    @media screen and (min-width: 768px) {
      font-size: 30px;
    }
    @media screen and (min-width: 900px) {
      font-size: clamp(24px, 3vw + 1rem, 56px);
    }
    @media screen and (min-width: 1000px) {
      font-size: clamp(24px, 2vw + 1rem, 56px);
    }
    @media screen and (min-width: 1200px) {
      font-size: clamp(24px, 3vw + 1rem, 56px);
    }
  }
  & p {
    margin: 0;
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  & label {
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin-bottom: 12px;
    @media screen and (min-width: 1400px) {
      font-size: 20px;
    }
  }
  & input {
    border-radius: 15px;
    background: #fff;
    /* height: 78px; */
    border: none;
    padding: 10px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    @media screen and (min-width: 1500px) {
        padding: 18px 20px;
      font-size: 18px;
    }
    @media screen and (min-width: 1560px) {
      padding: 23px 38px;
      font-size: 20px;
    }
  }
  & textarea {
    border-radius: 15px;
    background: #fff;
    height: 130px;
    border: none;
    padding: 10px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    @media screen and (min-width: 1400px) {
        height: 150px;
    }
    @media screen and (min-width: 1500px) {
        padding: 18px 20px;
      font-size: 18px;
    }
    @media screen and (min-width: 1560px) {
      padding: 23px 38px;
      font-size: 20px;
      height: 195px;
    }
  }
`;
const InputBox = styled.div`
  margin-top: 40px;

  gap: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.message {
    margin-top: 24px;
  }
`;
const SubmitWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
  & .agree-box {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    & input {
      appearance: none;
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #333;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;
      padding: 0;
      @media screen and (min-width: 900px) {
        width: 30px;
        height: 30px;
      }
    }
    & input:checked {
      background-color: ${({ theme }) => theme.colors.darkText};
      border-color: ${({ theme }) => theme.colors.darkText};
    }
    & input:checked::before {
      content: "✔";
      color: white;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: normal;
      @media screen and (min-width: 900px) {
        font-size: 18px;
      }
    }
  }
  & label {
    max-width: 70%;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
    margin-left: 20px;
    margin-bottom: 0;
    @media screen and (min-width: 900px) {
      font-size: 14px;
    }
  }
  & button {
    border-radius: 15px;
    background: #11112b;

    padding: 10px 30px;
    width: fit-content;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin-top: 40px;
    @media screen and (min-width: 1500px) {
      padding: 20px 40px;
    }
  }
`;

const MapBackdrop = styled.div`
  position: absolute;
  left: 40px;
  top: 150px;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(5px);
  width: 250px;
  height: 120px;
  @media screen and (min-width: 600px) {
    left: 5px;
    top: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 513px;
    left: 32px;
    bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    left: 32px;
    bottom: 40px;
    top: auto;
  }
  & img {
    width: 80px;
    display: block;
  }
  & a {
    margin: 0;
    color: var(--Dark-Blue, #11112b);

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
`;
export {
  SectionContact,
  ContactWraper,
  LinkWraper,
  ContactItem,
  FormWraper,
  FormContact,
  InputBox,
  InputWraper,
  SubmitWraper,
  MapBackdrop,
};
