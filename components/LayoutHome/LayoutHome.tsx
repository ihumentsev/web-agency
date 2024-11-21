import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

export default function LayoutHome({ children }) {
  return (
    <>
      <PageLayout>
        <Header />
        <MainBox>{children}</MainBox>
        <Footer />
      </PageLayout>
    </>
  );
}

const PageLayout = styled.div``;

const MainBox = styled.main`
  position: relative;
  min-height: 100%;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  z-index: 2;
`;
