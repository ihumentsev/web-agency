
import styled, { keyframes } from 'styled-components';

// Анимация для появления текста
const slideIn = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const waveAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }

  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 1000;
  }
`;
  


// Основной контейнер для текста
const TextContainer = styled.div`
  /* display: flex; */
  /* justify-content: center; Центрируем текст */
  animation: ${slideIn} 1.5s forwards;
`;

// Стиль для первого текста
const Text1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
 font-family: ${({ theme, locale }) => theme.fontsTitle[locale] || theme.fontsText.default};
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(97deg, #92DEED 30.1%, #FFF 94.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 110px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 140px;
  }
  @media screen and (min-width: 1216px) {
    font-size: 150px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 160px;
  }

    transition: transform 0.1s linear; /* Плавное движение */
    & .frag {
    color: #FFF;
    font-family: Poppins;
    font-size: 40px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    background: none; /* Убираем любые влияния градиента */
    -webkit-background-clip: unset;
    background-clip: unset;
    margin-right: 30px;

    @media screen and (min-width: 768px) {
      font-size: 100px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 130px;
    }
    @media screen and (min-width: 1216px) {
      font-size: 140px;
    }
    @media screen and (min-width: 1400px) {
      font-size: 150px;
    }
  }
`;

// Стиль для второго текста
const Text2 = styled.div`
 font-family: ${({ theme, locale }) => theme.fontsTitle[locale] || theme.fontsText.default};
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal; 
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 110px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 140px;
  }
  @media screen and (min-width: 1216px) {
    font-size: 150px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 160px;
  }
  
  transition: transform 0.1s linear; /* Плавное движение */
  & .frag {
    color: #FFF;
    font-family: Poppins;
    font-size: 40px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    background: none; /* Убираем любые влияния градиента */
    -webkit-background-clip: unset;
    background-clip: unset;
    margin-right: 36px;

    @media screen and (min-width: 768px) {
      font-size: 100px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 130px;
    }
    @media screen and (min-width: 1216px) {
      font-size: 140px;
    }
    @media screen and (min-width: 1400px) {
      font-size: 150px;
    }
  }
`;

const HeroSection = styled.section`
background-color: ${({ theme }) => theme.colors.darckBackground};
  padding: 90px 0 0 0;
  position: relative;
  display: flex;
  align-items: center; 
  z-index: 2;
  overflow: hidden;
  transition: none;
`;


const AnimatedSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  path {
    stroke: white; /* Цвет линий */
    stroke-width: 1.25;
    fill: none;
    stroke-dasharray: 1000;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Анимация для каждой линии со сдвигом */
  path:nth-child(1) {
    animation: ${waveAnimation} 8s linear infinite;
  }
  path:nth-child(2) {
    animation: ${waveAnimation} 8s linear infinite;
  }

  path:nth-child(3) {
    animation: ${waveAnimation} 10s linear infinite;
  }

  path:nth-child(4) {
    animation: ${waveAnimation} 12s linear infinite;
  }

  path:nth-child(5) {
    animation: ${waveAnimation} 14s linear infinite;
  }

  path:nth-child(6) {
    animation: ${waveAnimation} 16s linear infinite;
  }

  path:nth-child(7) {
    animation: ${waveAnimation} 24s linear infinite;
  }

  path:nth-child(8) {
    animation: ${waveAnimation} 24s linear infinite;
  }

  path:nth-child(9) {
    animation: ${waveAnimation} 22s linear infinite;
  }

  path:nth-child(10) {
    animation: ${waveAnimation} 24s linear infinite;
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(97deg, #92DEED 30.1%, #FFF 94.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 110px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 140px;
  }
  @media screen and (min-width: 1216px) {
    font-size: 150px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 160px;
  }

  & .frag {
    color: #FFF;
    font-family: Poppins;
    font-size: 40px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    background: none; /* Убираем любые влияния градиента */
    -webkit-background-clip: unset;
    background-clip: unset;

    @media screen and (min-width: 768px) {
      font-size: 100px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 130px;
    }
    @media screen and (min-width: 1216px) {
      font-size: 140px;
    }
    @media screen and (min-width: 1400px) {
      font-size: 150px;
    }
  }
  & .title {
    color: #FFF;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: none; /* Убираем любые влияния градиента */
    -webkit-background-clip: unset;
    background-clip: unset;

    @media screen and (min-width: 768px) {
      font-size: 110px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 140px;
    }
    @media screen and (min-width: 1216px) {
      font-size: 150px;
    }
    @media screen and (min-width: 1400px) {
      font-size: 160px;
    }
  }
`;

const HeroText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 700px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
    max-width: 900px;
  }
  @media screen and (min-width: 1216px) {
    max-width: 865px;
    font-size: 20px;
  }
`;

const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 1216px) {
    margin-top: 50px;
  }
`;

export {
  HeroTitle,
  HeroText,
  BtnWraper,
  HeroSection,
  TextContainer,
  Text1,
  Text2,
  AnimatedSVG,
 
};
