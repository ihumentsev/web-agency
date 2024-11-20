import { useState } from "react";
import ArrowButton from "../Buttons/ArrowButton";
import Container from "../Container/Container";
import {
  BtnWraper,
  ContentWraper,
  PartWraper,
  QuestionItem,
  QuestionSection,
} from "./QuestionsSection.styled";

export default function QuestionsSection() {
  const [active, setActive] = useState(null);
  console.log(active);

  const ActiveHandler = (id) => {
    if (id === active) {
      console.log("close");

      setActive(null);
    } else {
      setActive(id);
    }
  };
  return (
    <QuestionSection>
      <Container>
        <ContentWraper>
          <PartWraper className="title-wraper">
            <h2>Got Any Questions?</h2>
            <BtnWraper>
              <ArrowButton text="ASK A QUESTION" handler={() => {}} />
            </BtnWraper>
          </PartWraper>
          <PartWraper>
            <ul>
              <QuestionItem
                className={active === "1" ? "active" : null}
                onClick={() => {
                  ActiveHandler("1");
                }}
              >
                <button></button>
                <h3>What services does WaveNet offer?</h3>
                <p>
                  Our pricing varies based on the specific services and needs of
                  your business. We offer flexible pricing options to suit your
                  budget and requirements. Contact us to learn more.
                </p>
              </QuestionItem>
              <QuestionItem
                className={active === "2" ? "active" : null}
                onClick={() => {
                  ActiveHandler("2");
                }}
              >
                <button></button>
                <h3>Which IT solution is for my business?</h3>
                <p>
                  Our pricing varies based on the specific services and needs of
                  your business. We offer flexible pricing options to suit your
                  budget and requirements. Contact us to learn more.
                </p>
              </QuestionItem>
              <QuestionItem
                className={active === "3" ? "active" : null}
                onClick={() => {
                  ActiveHandler("3");
                }}
              >
                <button></button>
                <h3>How much do the services cost?</h3>
                <p>
                  Our pricing varies based on the specific services and needs of
                  your business. We offer flexible pricing options to suit your
                  budget and requirements. Contact us to learn more.
                </p>
              </QuestionItem>
              <QuestionItem
                className={active === "4" ? "active" : null}
                onClick={() => {
                  ActiveHandler("4");
                }}
              >
                <button></button>
                <h3>How do I get started with the IT solutions?</h3>
                <p>
                  Our pricing varies based on the specific services and needs of
                  your business. We offer flexible pricing options to suit your
                  budget and requirements. Contact us to learn more.
                </p>
              </QuestionItem>
            </ul>
          </PartWraper>
        </ContentWraper>
      </Container>
    </QuestionSection>
  );
}
