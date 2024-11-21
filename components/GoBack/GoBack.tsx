import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "../Container/Container";

export default function GoBack({ prevPath, title }) {
  const router = useRouter();

  return (
    <>
      <Wraper>
        <Container>
          <LinkList>
            <LinkItem>
              <Link href="/">Home</Link>
            </LinkItem>
            {prevPath.path && (
              <LinkItem>
                <Link href={prevPath.path}>{prevPath.text}</Link>
              </LinkItem>
            )}
            <LinkItem>
              <Link href={router.pathname}>{title}</Link>
            </LinkItem>
          </LinkList>
        </Container>
      </Wraper>
    </>
  );
}

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.colors.darckBackground};
  padding: 100px 0 0 0;
`;
const LinkList = styled.ul`
  display: flex;

  gap: 16px;
`;

const LinkItem = styled.li`
  & a {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
  &:not(:last-child) a::after {
    content: ">";
    margin-left: 16px;
  }
  &:last-child a {
    font-weight: 600;
  }
`;
