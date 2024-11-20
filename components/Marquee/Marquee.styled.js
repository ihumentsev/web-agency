import styled, { keyframes } from "styled-components";
const marquee = keyframes`
0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
`



const MarqueeBox = styled.div`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  /* background-color: #f5f5f5; */
  padding: 10px 0;
  &::before,
  &::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  pointer-events: none; /* Чтобы градиенты не мешали взаимодействию */
  z-index: 2;
}
&::before {
  left: 0;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.darckBackground}, transparent);
}
&::after {
  right: 0;
  background: linear-gradient(to left, ${({ theme }) => theme.colors.darckBackground}, transparent);
}
`
const MarqueeInner = styled.div`
  display: flex;
  animation: ${marquee} 600s linear infinite;
`
const MarqueeLogo = styled.div`
display: flex;
align-items: center;
margin-right: 200px;
& img{
    height: 100%;
}
`
export{
    MarqueeBox,
    MarqueeInner,
    MarqueeLogo

}