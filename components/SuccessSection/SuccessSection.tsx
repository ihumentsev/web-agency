import Container from "../Container/Container";
import { Section, SectionText, SuccessList, WraperTitle } from "./SuccessSection.styled";


export default function SuccessSection(){
    return (
        <>
        <Section >
            <Container>
            <h2></h2>
            <WraperTitle><span>We believe that</span><span>technology</span><br/><span>can <span className="change">change</span>the world.</span></WraperTitle>
            <SectionText>That&#39;s why we&#39;re committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</SectionText>
            
            {/* <SuccessList>
                <li>
                    <h3>500+</h3>
                    <p>Successful Projects</p>
                </li>
                <li>
                <h3>98%</h3>
                <p>Satisfied Clients</p>
                </li>
                <li>
                <h3>35+</h3>
                <p>Handled Countries</p>
                </li>
            </SuccessList> */}
            </Container>
        </Section>
        </>
    )
}