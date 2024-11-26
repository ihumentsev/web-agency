import Container from "../Container/Container";
import {ContentWraper, FormBtnWraper, FormWrper, InputWraper, QuestFormSection, QuestionForm, TitleWraper} from './QuesttionFormSection.styled'

export default function QuesttionFormSection(){
    return (
        <>
          <QuestFormSection>
            <Container>
                <ContentWraper>
                    <TitleWraper>
                        <h2>Frequently
                        Asked Questions</h2>
                        <p>
                        Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.
                        </p>
                        <p>
                        Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. We strive to provide clear and concise answers so that our clients have a seamless experience.
                        </p>
                    </TitleWraper>
                    <FormWrper>
                        <QuestionForm action="">
                           <h3>Any Questions
                           About Us?</h3> 
                           <p>Leave us a message.</p>
                           <div>
                            <InputWraper>
                                <label htmlFor="name">
                                Name
                                </label>
                                <input type="text" id="name" placeholder="Your Name ..."/>
                            </InputWraper>
                            <InputWraper>
                                <label htmlFor="massage">massage</label>
                                <textarea name="massage" id="massage" placeholder="Your Message ..."></textarea>
                            </InputWraper>
                           </div>
                           <FormBtnWraper>
                            <button type="button">Send A Message</button>
                           </FormBtnWraper>
                        </QuestionForm>
                    </FormWrper>
                </ContentWraper>
            </Container>
          </QuestFormSection>
        </>
    )
}