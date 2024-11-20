import Image from "next/image";
import {BenefitsItem, BenefitsList, BenefitsSection, ThumbImg} from './Benefits.styled'
import Container from "../Container/Container";
import AnimatedSVG from "../AnimatedSVG/AnimatedSVG";
export default function Benefits(){
    return (
        <>
        <BenefitsSection>
            <AnimatedSVG></AnimatedSVG>
            <Container>
            <h2>Why <br/>
            Choose Us?</h2>
            <BenefitsList>
                <BenefitsItem>
                <ThumbImg>
                    <Image src="/icons/Vector1.svg" alt="icon" width={180} height={140}/>
                    </ThumbImg>
                    <h3>expertise</h3>
                    <p>Our team of experienced experts have the knowledge and expertise
to deliver innovative IT solutions
that meet your unique needs.</p>
                </BenefitsItem>
                <BenefitsItem>
                    <ThumbImg>
                    <Image src="/icons/Vector2.svg" alt="icon" width={180} height={140}/>
                    </ThumbImg>
                    <h3>technology</h3>
                    <p>We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.</p>
                </BenefitsItem>
                <BenefitsItem>
                <ThumbImg>
                    <Image src="/icons/Vector3.svg" alt="icon" width={180} height={140}/>
                    </ThumbImg>
                    <h3>solutions</h3>
                    <p>We take a personalized approach
                    to every project, working closely with you to understand your business and create solutions.</p>
                </BenefitsItem>
                <BenefitsItem>
                <ThumbImg>
                    <Image src="/icons/Vector4.svg" alt="icon" width={180} height={140}/>
                    </ThumbImg>
                    <h3>results</h3>
                    <p>Our track record speaks for itself – we&#39;ve helped businesses of all sizes and industries achieve their goals with our IT solutions.</p>
                </BenefitsItem>
            </BenefitsList>
            </Container>
        </BenefitsSection>
        </>
    )
}