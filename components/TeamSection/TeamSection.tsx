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
import img from "../../images/team/imgdesk2.png";
import img2 from "../../images/team/imgdesk3.png";
import img3 from "../../images/team/imgdesk4.png";
import img4 from "../../images/team/imgdesk.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TeamSection() {


    const settings = {
      className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1600, // На устройствах меньше 1400px
        settings: {
          slidesToShow: 3, // Показывать 2 слайда
          centerPadding: "80px", // Уменьшаем отступы
        },
      },
      {
        breakpoint: 1400, // На устройствах меньше 1400px
        settings: {
          slidesToShow: 3, // Показывать 2 слайда
          centerPadding: "30px", // Уменьшаем отступы
        },
      },
      {
        breakpoint: 1080, // На устройствах меньше 1080px
        settings: {
          slidesToShow: 3, // Показывать 2 слайда
          centerPadding: "20px", // Уменьшаем отступы
        },
      },
      {
        breakpoint: 768, // На устройствах меньше 768px
        settings: {
          slidesToShow:2, // Показывать 1 слайд
          centerPadding: "10px", // Минимальные отступы
        },
      },
      {
        breakpoint: 480, // На устройствах меньше 480px
        settings: {
          slidesToShow: 1,
          centerMode: false, // Выключаем центрирование
        },
      },
    ],
    };
 


  return (
    <>
      <SectionTeam data-section="dark">
        <Container>
          <TitleWraper>
            <h2>Our Team</h2>
            <p>The passionate people behind our every projects in WaveNet.</p>
          </TitleWraper>

          {/* <TeamList>
            <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Anna</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img2} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>IT Sales Manager</h3>
                  <p>Robert</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img3} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>Backend departament</h3>
                  <p>Andrey</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img4} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>Frontend departament</h3>
                  <p>Sergey</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
          
          </TeamList> */}
          <div className="slider-container">
          <Slider {...settings}>
      
          <TeamItem>
              <Link href="#">
                <Image src={img} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>CEO & Founder</h3>
                  <p>Anna</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img2} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>IT Sales Manager</h3>
                  <p>Robert</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img3} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>Backend departament</h3>
                  <p>Andrey</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
            <TeamItem>
              <Link href="#">
                <Image src={img4} alt="foto" width={400} height={400}></Image>
                <BackdropItem className="backdrop-item">
                  <h3>Frontend departament</h3>
                  <p>Sergey</p>
                  <div></div>
                </BackdropItem>
              </Link>
            </TeamItem>
          </Slider>
          </div>
        </Container>
      </SectionTeam>
    </>
  );
}
