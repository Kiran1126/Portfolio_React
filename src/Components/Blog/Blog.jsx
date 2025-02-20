import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import BtnContainer from "../Container/BtnContainer";
import ShowMore from "./ShowMore";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

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
    title: "Creating my own portfolio",
    label: "Video",
    icon: "videocam",
    url: "https://www.linkedin.com/posts/kiran-samanta-732604258_connections-internship-oasisinfobyte-activity-7097236183641993216-27Ah?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9zJxYBcvJsjbDrPjLK6zkWXJJumiY42qo",
    category: "initial"
  },
  {
    img: BlogArtwork_3,
    title: "My first internship experience",
    label: "Blog",
    icon: "link",
    url: "#",
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
    <section className="w-[80%] h-screen bg-white float-right flex flex-col justify-around items-stretch overflow-hidden">
      <Heading
        faded="Blogs"
        bold="What I Write"
        theme="text-black"
        borderColor="border-blue-500"
      />
      <AnimatedOnScroll animationIn="fadeInUpBig">
        <div className="flex flex-col gap-5">
          <ul className="flex justify-evenly items-stretch flex-wrap">
            {renderBlogs("initial")}
          </ul>
          <ul className={`${showMore ? "flex justify-evenly flex-wrap relative" : "hidden absolute"}`}>
            {renderBlogs("additional")}
          </ul>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInUpBig">
        <div className="flex justify-center">
          <BtnContainer onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </BtnContainer>
        </div>
      </AnimatedOnScroll>
    </section>
  );
}

export default Blog;