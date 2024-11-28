import Link from "next/link"
import Container from "../Container/Container"
import GoBack from "../GoBack/GoBack"
import {ContactItem, ContactWraper, FormContact, FormWraper, InputBox, InputWraper, LinkWraper, MapBackdrop, SectionContact, SubmitWraper} from './ContactSection.styled'
import Image from "next/image"
import img from '../../images/mapa.png'

export default function ContactSection(){
    return (
        <>
        <SectionContact>
            <GoBack prevPath={{}} title="Contacts"/>
            <Container>
            <h2>Contact</h2>
            <ContactWraper>
               <h3>Let’s get in touch!</h3> 
               <LinkWraper>
                <ContactItem href="tel:+48787060899">
                <div className="tel"></div>
                <h4>Phone</h4>
                <p>+48787-060-899</p>
                </ContactItem>
                <ContactItem className="second-item" href="mailto:support@take-site.com">
                <div className="email"></div>
                <h4>Email</h4>
                <p>support@take-site.com</p>
                </ContactItem>
               </LinkWraper>
            </ContactWraper>
            <FormWraper>
                <Image src={img} alt="map" className="map"/>
                {/* <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.8574978520255!2d19.30134347632118!3d51.82703358730335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb482538cc741%3A0x75869d5189dfe30d!2sNoworudna%208%2C%2095-069%20Aleksandr%C3%B3w%20%C5%81%C3%B3dzki!5e0!3m2!1suk!2spl!4v1732791510164!5m2!1suk!2spl" width="600" height="450" style={{border:0}} loading="lazy" ></iframe> */}
                <FormContact action="">
                    <h3>Send Us Message</h3>
                    <p>Have any questions regarding our services? Send us your message.</p>
                <div>
                    <InputBox>
                        <InputWraper>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Your Name ..."/>
                        </InputWraper>
                        <InputWraper>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter Your Email Address ..."/>
                        </InputWraper>
                        
                        
                    </InputBox>
                    <InputWraper className="message">
                            <label htmlFor="message">Message
                            </label>
                        <textarea name="message" id="message" placeholder="Enter Your Message ..."></textarea>
                        </InputWraper>
                        <SubmitWraper>
                            <div className="agree-box">
                            <label htmlFor="agree">By ticking this box, I am consenting to be sent monthly articles and
                            promotions through WaveNet newsletter.</label>
                            <input type="checkbox" id="agree" name="agree"/>
                            </div>
                            <button type="button">SUBMIT</button>
                        </SubmitWraper>
                </div>
                </FormContact>
                <MapBackdrop>
                <Image src="/icons/Logo-new-dark.svg" alt="Logo" width={150} height={50}/>
                <a href="https://maps.app.goo.gl/jnbyxzEEeYGUToZLA" target="_blank">Łódz, Aleksandrów Łodzki, Noworudna 8, 95-070, Poland</a>
            </MapBackdrop>
            </FormWraper>
            
            </Container>
            
        </SectionContact>
        </>
    )
}