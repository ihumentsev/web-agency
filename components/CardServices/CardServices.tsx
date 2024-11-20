import Link from 'next/link'
import Container from '../Container/Container'
import {CardServicesSection, ContentWraper, ListWraper, ServicesItem, TitleWraper} from './CardServices.styled'
import ArrowButton from '../Buttons/ArrowButton'
export default function CardServices(){
    return (
        <>
        <CardServicesSection>
            <Container>
            <ContentWraper>
                <ListWraper>
                    <ul>
                        <ServicesItem>
                            <Link href="#">
                            <h3>Web
                            Development</h3>
                            <div></div>
                            </Link>
                        </ServicesItem>
                        <ServicesItem>
                        <Link href="#">
                            <h3>Mobile
                            Development</h3>
                            <div></div>
                            </Link>
                        </ServicesItem>
                        <ServicesItem>
                        <Link href="#">
                            <h3>Cyber
                            Security</h3>
                            <div></div>
                            </Link>
                        </ServicesItem>
                        <ServicesItem>
                        <Link href="#">
                            <h3>Cloud
                            Computing</h3>
                            <div></div>
                            </Link>
                        </ServicesItem>
                        <ServicesItem>
                        <Link href="#">
                            <h3>Digital
                            Marketing</h3>
                            <div></div>
                            </Link>
                        </ServicesItem>
                    </ul>
                </ListWraper>
                <TitleWraper>
                    <div>
                    <h2>Services</h2>
                    <p>We provide customized solutions that meet our clients&#39; unique needs and help them succeed in an increasingly digital world.</p>
                    </div>
                    <ArrowButton text="LEARN MORE" handler={()=>{}}/>
                </TitleWraper>
            </ContentWraper>
            </Container>
        </CardServicesSection>
        </>
    )
}