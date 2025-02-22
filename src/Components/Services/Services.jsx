import Heading from "../Heading/Heading";
import TextContainer from "../Container/TextContainer";
import CompetitiveCoding from "../../assets/Services/CompetitiveCoding.png"
import Web from "../../assets/Services/html.jpg"
import ScrollAnimation from "react-animate-on-scroll";

const containerArr = [
  {
    image: "https://bolby-react.vercel.app/images/service-2.svg",
    heading: "DSA",
    text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    theme: "bg-yellow-500",
    txtColor: "text-black"
  },
  {
    image: CompetitiveCoding,
    heading: "Competitive Programming",
    text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    theme: "bg-blue-500",
    txtColor: "text-white"
  },
  {
    image: Web,
    heading: "Web Development",
    text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    theme: "bg-slate-50",
    txtColor: "text-black"
  }
];

function Services () {
  return (
    <section className="w-4/5 h-screen bg-custom-dark float-right flex flex-col justify-evenly">
      <Heading faded="services" bold="What I Do" theme="text-white" borderColor="border-orange-500"/>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
        <div className="flex justify-evenly px-10 flex-wrap">
          {
            containerArr.map((temp) => (
              <TextContainer background={temp.theme} width="max-w-80" animation="transition duration-500 hover:-translate-y-6 delay-100">
                <img className="h-20 w-20" src={temp.image} alt="icon" />
                <h1 className={`${temp.txtColor} text-xl font-bold`}>{temp.heading}</h1>
                <p className={`${temp.txtColor} text-center`}>{temp.text}</p>
              </TextContainer>
            ))
          }
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <p className="text-center text-slate-50 text-xl font-semibold">Looking for a custom job? 
          <span className="cursor-pointer m-2 text-orange-500 hover:underline" onClick={() => {
            window.location.href="/Contact"
          }}>
          Click here</span> 
        to contact me! 👋</p>
      </ScrollAnimation>
    </section>
  );
};

export default Services;