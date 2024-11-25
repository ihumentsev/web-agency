import styled from "styled-components";

export default function ArrowButton ({handler, text}) {
    return (
        <Btn onClick={handler}>{text}
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="16" viewBox="0 0 101 16" fill="none">
<path d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3434 0.928932C93.9529 0.538408 93.3197 0.538408 92.9292 0.928932C92.5387 1.31946 92.5387 1.95262 92.9292 2.34315L98.586 8L92.9292 13.6569C92.5387 14.0474 92.5387 14.6805 92.9292 15.0711C93.3197 15.4616 93.9529 15.4616 94.3434 15.0711L100.707 8.70711ZM0.000244141 9H100V7H0.000244141L0.000244141 9Z" fill="white"/>
</svg>
        </Btn>
    )
}

const Btn = styled.button`
z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid  #FFF;
    /* background:  #11112B; */
    padding: 14px 34px ;
    background-color: ${({ theme }) => theme.colors.darckBackground};
    color: ${({ theme }) => theme.colors.lightText};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* background-image: url('/icons/Arrow Icon.svg');
    background-repeat: no-repeat;
    background-position: center right; */
    margin: 0 auto;
    

    @media screen and (min-width: 768px){
        /* width: 335px; */
        font-size: 16px;
        padding: 18px 36px;
    }
    @media screen and (min-width: 1080px){
        /* width: 335px; */
        font-size: 16px;
        padding: 27px 48px;
    }
    & svg{
        margin-left: 20px;
        width: 80px;
    }
`