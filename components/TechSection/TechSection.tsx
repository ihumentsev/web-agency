import Link from "next/link";
import ArrowButton from "../Buttons/ArrowButton";
import Container from "../Container/Container";
import {
  ContentWraper,
  FilterList,
  ListWraper,
  SectionTech,
  TechItem,
  TechList,
  TitleWraper,
} from "./TechSection.styled";
import react from "../../images/icons/tech/react.svg";
import php from "../../images/icons/tech/php.svg";
import node from "../../images/icons/tech/node.svg";
import next from "../../images/icons/tech/next.svg";
import aws from "../../images/icons/tech/aws.svg";
import lara from "../../images/icons/tech/lara.svg";
import ts from "../../images/icons/tech/ts.svg";
import sql from "../../images/icons/tech/sql.svg";
import Image from "next/image";
import { useState } from "react";
export default function TechSection() {
  const [filter, setFilter] = useState("web");
  return (
    <>
      <SectionTech data-section="light" className="light-section">
        <Container>
          <ContentWraper>
            <TitleWraper>
              <h2>Technology Stack</h2>
              <p>
                This article explores the top trends that are expected to shape
                the landscape of web development in 2023, highlighting the key
                areas where developers should focus on working.
              </p>
              <ArrowButton
                text="More technology"
                handler={() => {
                  console.log("click");
                }}
              />
            </TitleWraper>
            <ListWraper>
              <div>
                <FilterList>
                  <li
                    className={filter === "web" ? "active" : null}
                    onClick={() => {
                      setFilter("web");
                    }}
                  >
                    Web technologi
                  </li>
                  <li
                    className={filter === "mobile" ? "active" : null}
                    onClick={() => {
                      setFilter("mobile");
                    }}
                  >
                    Mobile technologi
                  </li>
                  <li
                    className={filter === "data" ? "active" : null}
                    onClick={() => {
                      setFilter("data");
                    }}
                  >
                    Database
                  </li>
                  <li
                    className={filter === "cloud" ? "active" : null}
                    onClick={() => {
                      setFilter("cloud");
                    }}
                  >
                    Cloud
                  </li>
                </FilterList>
              </div>
              <div>
                <TechList>
                  <TechItem>
                    <Link href="#">
                      <Image src={react} alt="React.js" />
                      <h3>React.js</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={php} alt="PHP" />
                      <h3>PHP</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={node} alt="PHP" />
                      <h3>Node.js</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={next} alt="PHP" />
                      <h3>Next.js</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={lara} alt="PHP" />
                      <h3>Laravel</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={ts} alt="PHP" />
                      <h3>TypeScript</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={aws} alt="PHP" />
                      <h3>AWS</h3>
                    </Link>
                  </TechItem>
                  <TechItem>
                    <Link href="#">
                      <Image src={sql} alt="PHP" />
                      <h3>MySql</h3>
                    </Link>
                  </TechItem>
                </TechList>
              </div>
            </ListWraper>
          </ContentWraper>
        </Container>
      </SectionTech>
    </>
  );
}
