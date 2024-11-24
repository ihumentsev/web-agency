import styled from "styled-components";

const MobileModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.colorBackground};
  width: 320px;
  height: 100%;
  transition: transform 1s ease;
  padding: 10px 15px;
  &.active {
    transform: translateX(0%);
  }
`;

const MobileMenuHeder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: linear-gradient(180deg, #11112B 0%, rgba(17, 17, 43, 0.00) 100%); */
  & button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    background-image: url("/icons/ArrowCloseBtn.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: none;
  }
`;
const LangBox = styled.div`
  margin-top: 30px;
  & ul {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightText};
  }
  & li {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.lightText};
    color: ${({ theme }) => theme.colors.colorText};
    font-family: "Space Grotesk";
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    &.active{
        background-color: ${({ theme }) => theme.colors.darkText};
        color: ${({ theme }) => theme.colors.lightText};    
    }
  }
`;

const LinkList = styled.ul`
  padding: 10px 0;
  
  & li {
    position: relative;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & a {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: "Space Grotesk";
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    &.active{
        color: ${({ theme }) => theme.colors.darkText};
    }
  }
  & button {
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url("/icons/ArrowIconSmol.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const ContentMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const BackdropMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transform: translateX(110%);
  transition: transform 1s ease;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.colorBackground};
  padding: 10px 0;
  
  &.active {
    transform: translateX(0%);
  }

  & div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & button {
      width: 30px;
      height: 30px;
      background-color: transparent;
      background-image: url("/icons/ArrowCloseBtn.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border: none;
      transform: rotate(180deg);
    }
    & h3 {
      margin-left: 32%;
    }
  }
`;

const BackdropList = styled.ul`
height: 100%;
overflow-y: scroll;
  & li {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & a {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: "Space Grotesk";
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  }
`;

const SocialWraper = styled.div`
margin-top: auto;
padding: 10px 0;
& ul{
    display: flex;
    justify-content: center;
    gap: 30px
}
& li{
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:first-child{
        background-image: url('/icons/inst.svg');
    }
    &:nth-child(2){
        background-image: url('/icons/facebook-svgrepo-com.svg');
       
        
    }
    &:last-child{
        background-image: url('/icons/X_logo.svg');
 
    }
    & a{
        width: 100%;
        height: 100%;
    }
}
`
export {
  MobileModal,
  MobileMenuHeder,
  LangBox,
  LinkList,
  ContentMenu,
  BackdropMenu,
  BackdropList,
  SocialWraper
};
