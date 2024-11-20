import styled from "styled-components";
const DropdownContainer = styled.div`
  position: relative;
  display: none;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: flex;
  }
  &:hover .dropdown {
    display: block;
  }
  &:hover div{
      color: #92deed;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
        0 0 40px rgba(255, 255, 255, 0.2);
      /* filter: blur(25px); */
    }
 
`;
const LangWraper = styled.div`
    cursor: pointer;
    font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
  


`
const ActiveLng = styled.div`

display: flex;
justify-content: center;
align-items: center;
font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
font-size: 16px;

  & svg {
    width: 10px;
    margin-left: 5px;
  }
`
const LngList = styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    left: -20px;
    /* margin: 0; */
    /* margin-top: 30px; */
    border-radius: 10px;
    border: 1px solid #fff;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.darckBackground};

    & li{
        color: ${({ theme }) => theme.colors.lightText};
        font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
        font-size: 16px;
        padding: 20px;
        border-bottom: 1px solid #92DEED;
        cursor: pointer;
        &:hover{
            background-color: #92deed;
    box-shadow: 0 0 20px rgba(146, 222, 237, 1); /* Увеличиваем тень для эффекта свечения */
   
        }
    }
`

export {
    LangWraper,
    LngList,
    ActiveLng,
    DropdownContainer
}