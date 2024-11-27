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
  background-size:   cover ;
  background-position: center bottom;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    padding: 50px 0 150px 0;
  }
  @media screen and (min-width: 1400px) {
    padding: 50px 0 300px 0;
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
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  & h3 {
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 56px;
    font-weight: 700;
    line-height: normal;
  }
`;

const LinkWraper = styled.div`
  display: flex;
`;
const ContactItem = styled(Link)`
  position: relative;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  padding: 40px 45px;
  align-content: end;
  width: fit-content;
  height: 264px;
  margin-left: 30px;
  & div {
    position: absolute;
    top: 40px;
    left: 45px;
    width: 64px;
    height: 64px;
    border-radius: 50px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.2s ease-in-out;
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
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
  }
  & h4 {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 16px;
  }
  &:hover {
    box-shadow: 0 0 20px rgba(146, 222, 237, 1);
    background-color: #92deed;
  }
  &:hover div {
    /* top: 50%; */
    left: 50%;

    animation: ${pulse} 1s infinite;
  }
`;

const FormWraper = styled.div`
  position: relative;
  margin-top: 50px;
`;
const FormContact = styled.form`
  position: absolute;
  top: 223px;
  left: 624px;
  width: 978px;
  height: 722px;
  border-radius: 25px;
  background: #92deed;
  padding: 40px;

  & h3 {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 56px;
    font-weight: 700;
    line-height: normal;
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
    font-size: 24px;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    margin-bottom: 12px;
  }
  & input {
    border-radius: 15px;
    background: #fff;

    height: 78px;
    border: none;
    padding: 23px 38px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
  & textarea {
    border-radius: 15px;
    background: #fff;
    height: 195px;
    border: none;
    padding: 23px 38px;
    color: ${({ theme }) => theme.colors.darkText};
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
`;
const InputBox = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 30px;
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
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  & .agree-box {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    & input {
      appearance: none;
      -webkit-appearance: none;
      width: 30px;
      height: 30px;
      border: 2px solid #333;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;
      padding: 0;
    }
    & input:checked {
      background-color: ${({ theme }) => theme.colors.darkText};
      border-color: ${({ theme }) => theme.colors.darkText};
    }
    & input:checked::before {
      content: "✔";
      color: white;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & label {
    max-width: 70%;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-left: 20px;
    margin-bottom: 0;
  }
  & button {
    border-radius: 15px;
    background: #11112b;
    padding: 20px 40px;
    width: fit-content;
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
`;

const MapBackdrop = styled.div`
position: absolute;
left: 32px;
bottom: 32px;
padding: 32px;
border-radius: 25px;
border: 1px solid  rgba(255, 255, 255, 0.20);
background:  linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%);
backdrop-filter: blur(5px);
width: 513px;
& p{
    color: var(--Dark-Blue, #11112B);

font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
}
`
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
  MapBackdrop
};
