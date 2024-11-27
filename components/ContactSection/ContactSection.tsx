import Link from "next/link"
import Container from "../Container/Container"
import GoBack from "../GoBack/GoBack"
import {ContactItem, ContactWraper, FormContact, FormWraper, InputBox, InputWraper, LinkWraper, MapBackdrop, SectionContact, SubmitWraper} from './ContactSection.styled'
import Image from "next/image"
import img from '../../images/Image Placeholder.png'

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
                <ContactItem href="mailto:support@take-site.com">
                <div className="email"></div>
                <h4>Email</h4>
                <p>support@take-site.com</p>
                </ContactItem>
               </LinkWraper>
            </ContactWraper>
            <FormWraper>
                <Image src={img} alt="map"/>
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
                <p>Regus - Sydney Circular Quay, Level 17, 9 Castlereagh Street, Sydney, NSW 2000, Australia</p>
            </MapBackdrop>
            </FormWraper>
            
            </Container>
            
        </SectionContact>
        </>
    )
}