import Image from 'next/image'
import servisImg from '../../images/workexempl.png'
import Container from '../Container/Container'
import {ServicesItem, ServicesList, ServicesSection} from './Services.styled'

export default function Services(){

    return (
        <>
        <ServicesSection>
            <Container>
            <h2>Services</h2>
            <ServicesList>
                <ServicesItem>
                    <div className='right-wraper'>
                    <h3>Web Development</h3>
                    <p>Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business
                    operates securely and efficiently.</p>
                    </div>
                    <Image src={servisImg} alt="image" /><button></button></ServicesItem>
                <ServicesItem>
                <div className='right-wraper'>
                    <h3>Mobile Development</h3>
                    <p>Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business
                    operates securely and efficiently.</p>
                    </div>
                    <Image src={servisImg} alt="image" /><button></button></ServicesItem>
                <ServicesItem>
                <div className='right-wraper'>
                    <h3>Cyber Security</h3>
                    <p>Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business
                    operates securely and efficiently.</p>
                    </div>
                    <Image src={servisImg} alt="image" /><button></button></ServicesItem>
                <ServicesItem>
                <div className='right-wraper'>
                    <h3>Digital Marketing</h3>
                    <p>Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business
                    operates securely and efficiently.</p>
                    </div>
                    <Image src={servisImg} alt="image" /><button></button></ServicesItem>
            </ServicesList>
            </Container>
        </ServicesSection>
        </>
    )
}