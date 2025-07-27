import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import BtnContainer from "../Container/BtnContainer";
import ShowMore from "./ShowMore";
import ScrollAnimation from 'react-animate-on-scroll';

// Array of objects for the blog details
const blogArr = [
  {
    img: BlogArtwork_1,
    title: "My first internship experience",
    label: "Blog",
    icon: "link",
    url: "https://medium.com/@kiransamanta945/my-experience-throughout-my-web-development-and-designing-internship-journey-provided-by-oasis-5fdd5cf5d497",
    category: "initial"
  },
  {
    img: BlogArtwork_2,
    title: "Creating my first portfolio",
    label: "Video",
    icon: "videocam",
    url: "https://www.linkedin.com/posts/kiran-samanta-732604258_connections-internship-oasisinfobyte-activity-7097236183641993216-27Ah?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9zJxYBcvJsjbDrPjLK6zkWXJJumiY42qo",
    category: "initial"
  },
  {
    img: BlogArtwork_3,
    title: "Creating my latest website",
    label: "Blog",
    icon: "link",
    url: "https://medium.com/@kiransamanta945/building-my-own-react-js-based-portfolio-website-3c416f73e95e",
    category: "initial"
  },
  // Additional part starts here
  {
    img: BlogArtwork_3,
    title: "Work in progress",
    label: "Blog",
    icon: "link",
    url: "#",
    category: "additional"
  },
  {
    img: BlogArtwork_1,
    title: "Work in progress",
    label: "Video",
    icon: "videocam",
    url: "#",
    category: "additional"
  },
  {
    img: BlogArtwork_2,
    title: "Work in progress",
    label: "Blog",
    icon: "link",
    url: "#",
    category: "additional"
  }
];

function Blog() {
  const [showMore, setShowMore] = useState(false);

  const renderBlogs = (category) =>
    blogArr
      .filter((temp) => temp.category === category)
      .map((temp, index) => (
        <ShowMore
          key={index}
          img={temp.img}
          title={temp.title}
          label={temp.label}
          icon={temp.icon}
          url={temp.url}
        />
      ));

  return (
    <section className="w-screen md:w-[80%] h-auto md:h-[870px] py-16 md:py-0 bg-white md:float-right flex flex-col justify-around overflow-hidden">
      <Heading faded="Blogs" bold="What I Write" theme="text-black" borderColor="border-blue-500"/>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="flex flex-col gap-0 md:gap-5">
          <ul className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch flex-wrap">
            {renderBlogs("initial")}
          </ul>
          <ul className={`${showMore ? "flex justify-evenly flex-wrap relative" : "hidden absolute"}`}>
            {renderBlogs("additional")}
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation offset={100} animateIn="fadeIn" duration={2} animateOnce>
        <div className="flex justify-center mt-7 md:mt-0">
          <BtnContainer onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </BtnContainer>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Blog;