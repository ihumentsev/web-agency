import Image from "next/image";

import {
  ReviewsSection,
  ReviewsUserWraper,
  SectionNavLink,
  SliderItem,
  SliderWraper,
  TitleWraper,
  WraperImg,
} from "./Reviews.styled";
import Container from "../Container/Container";
import Marquee from "../Marquee/Marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../images/team/imgdesk.png";
import img2 from "../../images/team/imgdesk3.png";

const reviews = [
  {
    id: 1,
    title: "Amazing!",
    text: "“WaveNet's cybersecurity solution gave us the peace of mind we needed to focus on our business. They took the time to understand our unique needs and created a solution that protected our sensitive data and ensured compliance with industry regulations.”",
    author: "Tom Johnson",
    position: "CIO of Mika Medika Healthcare",
    image: img,
  },
  {
    id: 2,
    title: "Best Service",
    text: "“We were struggling to keep up with the demands of our growing business until we partnered with WaveNet. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”",
    author: "Jane Doe",
    position: "COO of DEF Manufacturing",
    image: img2,
  },
];

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Для экранов от 600 до 767 пикселей
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false, // сохраняем отключение бесконечной прокрутки
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <ReviewsSection>
        <Container>
          <TitleWraper>
            <h2>Client Stories</h2>
            <SectionNavLink href="/"></SectionNavLink>
          </TitleWraper>
          <SliderWraper>
            <Slider {...settings}>
              {reviews.map((item, index) => (
                <SliderItem
                  key={item.id}
                  className={
                    index === 0
                      ? "first"
                      : index === reviews.length - 1
                      ? "last"
                      : ""
                  }
                >
                  <div className="content-wraper">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <ReviewsUserWraper>
                      <div>
                        <h4>{item.author}</h4>
                        <p>{item.position}</p>
                      </div>
                      <WraperImg>
                        <Image src={item.image} alt="#" />
                      </WraperImg>
                    </ReviewsUserWraper>
                  </div>
                </SliderItem>
              ))}
            </Slider>
          </SliderWraper>
          <Marquee />
        </Container>
      </ReviewsSection>
    </>
  );
}
