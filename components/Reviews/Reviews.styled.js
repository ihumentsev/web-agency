import Link from "next/link";
import styled from "styled-components";

const ReviewsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.darckBackground};
  position: relative;
  padding: 200px 0;
  & h2 {
    color: ${({ theme }) => theme.colors.lightText};
    /* font-size: 40px; */
    font-size: clamp(24px, 5vw + 1rem, 100px);
    font-weight: 700;
    line-height: clamp(30px, 6vw + 2rem, 110px);
    /* @media screen and (min-width: 768px){
    font-size: 90px;
    }
@media screen and (min-width: 1400px){
    font-size: 80px;
} */
  }
`;
const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SectionNavLink = styled(Link)`
  width: 40px;
  height: 40px;
  background-image: url("/icons/ArrowIconSmol.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 150px;
  }
`;
const SliderWraper = styled.div`
  margin-top: 80px;
  margin-bottom: 160px;
  /* width: 90%; */
  margin-left: auto;
  margin-right: auto;
`;
const SliderItem = styled.div`
  /* display: flex; */
  width: 100%;
  height: 480px;
  padding: 0 20px;
  & .content-wraper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &.first {
    border-right: solid 1px ${({ theme }) => theme.colors.lightText};
  }

  & h3 {
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 56px;
    font-weight: 700;
    line-height: normal;
    @media screen and (min-width: 900px) {
      font-size: 40px;
    }
  }
  & p {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: clamp(10px, 2vw + 0.5rem, 20px);
  }
  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

const ReviewsList = styled.ul`
  margin-top: 80px;
  margin-bottom: 160px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  & li {
    /* width: 50%; */
    &:first-child {
      border-right: solid 1px ${({ theme }) => theme.colors.lightText};
      /* opacity: 0.5; */
      padding-right: 120px;
    }
    &:last-child {
      padding-left: 120px;
    }
    & h3 {
      color: ${({ theme }) => theme.colors.colorText};
      font-size: 56px;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const ReviewsUserWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  & h4 {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme, locale }) =>
      theme.fontsText[locale] || theme.fontsText.default};
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  & p {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
`;

const WraperImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-left: 40px;
  flex-shrink: 0;
  overflow: hidden;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 1216px) {
    width: 88px;
    height: 88px;
  }
`;

const BrendList = styled.ul`
  display: flex;
`;
export {
  ReviewsSection,
  TitleWraper,
  SectionNavLink,
  ReviewsList,
  ReviewsUserWraper,
  WraperImg,
  BrendList,
  SliderItem,
  SliderWraper,
};
