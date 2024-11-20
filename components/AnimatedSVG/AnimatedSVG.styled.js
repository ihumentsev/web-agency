import styled, { keyframes } from "styled-components";


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
const AnimateWraper = styled.div`
position: relative;
  z-index: 1;



`
const AnimateSVG = styled.svg`
  position: absolute;
  top: -270px;
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
export {AnimateSVG, AnimateWraper}