import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import {
  BackdropItem,
  SectionTeam,
  TeamItem,
  TeamList,
  TitleWraper,
} from "./TeamSection.styled";
import img from "../../images/project4.png";

export default function TeamSection() {
  return (
    <>
      <SectionTeam data-section="dark">
        <Container>
          <TitleWraper>
            <h2>Our Team</h2>
            <p>The passionate people behind our every projects in WaveNet.</p>
          </TitleWraper>

          <TeamList>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Robert Kang</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Robert Kang</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Robert Kang</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Robert Kang</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Robert Kang</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
          </TeamList>
        </Container>
      </SectionTeam>
    </>
  );
}
