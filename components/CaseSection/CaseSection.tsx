import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import {CaseItem, CaseList, ContentWraper, DescriptionWraper, OverlayItem, SectionCase} from './CaseSection.styled';
import img from "../../images/project4.png";

export default function CaseSection(){
    return (
        <>
        <SectionCase>
            <Container>
                <ContentWraper>
                <h2>Case Studies</h2>
                <CaseList>
                    <CaseItem>
                        {/* <Link href="#"> */}
                        <Image src={img} width={400} height={400} alt="#"/>
                        <DescriptionWraper>
                        <p>2022</p>
                        <h3>Na vchora</h3>
                        </DescriptionWraper>
                        <OverlayItem className="overlay">
                            <p>03 / 2023</p>
                            <h3>Na vchora</h3>
                            <p>Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data.</p>
                            <Link href="#">READ MORE</Link>
                        </OverlayItem>
                        {/* </Link> */}
                    </CaseItem>
                    <CaseItem>
                        {/* <Link href="#"> */}
                        <Image src={img} width={400} height={400} alt="#"/>
                        <DescriptionWraper>
                        <p>2022</p>
                        <h3>Na vchora</h3>
                        </DescriptionWraper>
                        <OverlayItem className="overlay">
                            <p>03 / 2023</p>
                            <h3>Na vchora</h3>
                            <p>Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data.</p>
                            <Link href="#">READ MORE</Link>
                        </OverlayItem>
                        {/* </Link> */}
                    </CaseItem>
                    <CaseItem>
                        {/* <Link href="#"> */}
                        <Image src={img} width={400} height={400} alt="#"/>
                        <DescriptionWraper>
                        <p>2022</p>
                        <h3>Na vchora</h3>
                        </DescriptionWraper>
                        <OverlayItem className="overlay">
                            <p>03 / 2023</p>
                            <h3>Na vchora</h3>
                            <p>Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data.</p>
                            <Link href="#">READ MORE</Link>
                        </OverlayItem>
                        {/* </Link> */}
                    </CaseItem>
                </CaseList>
                </ContentWraper>
            </Container>
        </SectionCase>
        </>
    )
}