import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextContainer from "../Container/TextContainer";
import Heading from "../Heading/Heading";
import FemaleClient from "../../assets/Testimonial/Female_avatar.png";
import HTML from "../../assets/Testimonial/html5Icon.png";
import CSS from "../../assets/Testimonial/css3Icon.png";
import REACT from "../../assets/Testimonial/React.png";
import JS from "../../assets/Testimonial/Javascript.png";
import Redux from "../../assets/Testimonial/Redux.png";
import Node from "../../assets/Testimonial/Node.js.png";
import MySQL from "../../assets/Testimonial/Mysql.png";
import mongoDB from "../../assets/Testimonial/mongoDB.png";
import JAVA from "../../assets/Testimonial/java.png";
import GitHub from "../../assets/Testimonial/github.png";
import ScrollAnimation from "react-animate-on-scroll";

// Array of objects for the client details of the testimonial section
const clientArr = [
  {
    img: "https://bolby-react.vercel.app/images/avatar-1.svg",
    client: "Piyush Gupta",
    Prof: "Software Developer",
    comment: "I always enjoy working with you and learn so much. You make the process fun and interesting. Good luck! 👍",
  },
  {
    img: FemaleClient,
    client: "Debpriya Ghosh",
    Prof: "Software Developer",
    comment: "You did an amazing job. I'm very happy with the result. 😊",
  },
  {
    img: "https://bolby-react.vercel.app/images/avatar-3.svg",
    client: "John Doe",
    Prof: "Software Developer",
    comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  }
];

// Array of objects containing the technology images used in the page.
const techArr = [
  {
    img: HTML,
    alt: "HTML"
  },
  {
    img: CSS,
    alt: "CSS"
  },
  {
    img: JS,
    alt: "JS"
  },
  {
    img: REACT,
    alt: "REACT"
  },
  {
    img: Redux,
    alt: "REDUX"
  },
  {
    img: Node,
    alt: "Node.js"
  },
  {
    img: MySQL,
    alt: "MYSQL"
  },
  {
    img: mongoDB,
    alt: "mongoDB"
  },
  {
    img: JAVA,
    alt: "Java"
  },
  {
    img: GitHub,
    alt: "GitHub"
  },
];

// Settings for the card slider animation. Declared here in a spread operator
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

function Testimonial () {
  return (
    <section className="w-screen md:w-[80%] h-screen px-10 md:px-0 bg-custom-dark md:float-right overflow-x-hidden flex flex-col justify-evenly">
      <Heading faded="Testimonial" bold="What Others Say" theme="text-white" borderColor="border-orange-500"/>
      <Slider {...settings} >
        {
          clientArr.map((temp, index) => (
          <TextContainer key={index}>
            <TextContainer background="bg-transparent" width="max-w-96" animation="transition-none">
              <img className="w-24 h-24 md:max-h-32 md:max-w-32" src={temp.img} alt="client" />
              <p className="text-slate-50 font-semibold text-xl md:text-2xl">{temp.client}</p>
              <p className="text-slate-50 opacity-70 text-sm md:text-base">{temp.Prof}</p>
            </TextContainer>
            <TextContainer background="bg-white" width="max-w-96" animation="transition-none">
              <p className="text-black text-sm md:text-base">{temp.comment}</p>
            </TextContainer>
          </TextContainer>
          ))
        }
      </Slider>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="grid grid-cols-5 place-items-center gap-5 my-10 md:px-20 aspect-[1 / 1]">
          {
            techArr.map((temp, index) => (
              <img key={index} className="h-10 md:h-14 w-auto opacity-40" src={temp.img} alt={temp.alt} />
            ))
          }
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Testimonial;