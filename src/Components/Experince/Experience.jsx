import Heading from "../Heading/Heading";
import ExperienceContainer from "../Container/ExperienceContainer";
import ScrollAnimation from "react-animate-on-scroll";
import Sound from '../../assets/Music/MouseClick.mp3'
import useSound from "use-sound";

// Array of objects for education details
const academicsArr = [
  {
    time: "2013 - 2020",
    degree: "Secondary Education",
    institute: "Tarakeswar High School"
  },
  {
    time: "2020 - 2022",
    degree: "Higher Secondary Education",
    institute: "Tarakeswar High School"
  },
  {
    time: "2022 - 2026",
    degree: "Bachelor of Technology",
    institute: "JIS College of Engineering"
  }
];

// Array of objects for proffessional details
const experienceArr = [
  {
    time: "MAY 2023 - DEC 2023",
    domain: "Campus Ambassador",
    company: "Coding Ninjas"
  },
  {
    time: "JULY 2023 - AUG 2023",
    domain: "Web Development Intern",
    company: "Oasis Infobyte"
  },
  {
    time: "JULY 2023 - DEC 2024",
    domain: "Google Cloud Arcade Participant",
    company: "Google Cloud"
  }
];

const Experience = () => {
  return (
    <section className="h-[1020px] md:h-screen w-screen md:w-4/5 md:float-right flex flex-col justify-center md:justify-evenly gap-4 md:gap-0">
      <Heading faded="experience" bold="Summary" theme="text-black" borderColor="border-blue-500"/>
      <ExpSection />
      <LinkSection />
    </section>
  );
};

const ExpSection = () => { 

  const [play, { stop }] = useSound(Sound);

  const render = (data, iconColor, iconType) => 
    data.map((temp, index) => (
      <div key={index} className="flex gap-3 md:gap-5 p-2 md:p-5 group-hover:opacity-20 transition duration-300 hover:!opacity-100 hover:!scale-110" 
        onMouseEnter={() => play()}
        onMouseLeave={() => stop()}
      >
        <span className={`material-symbols-outlined ${iconColor} text-xl md:text-3xl`}>
          {iconType}
        </span>
        <div>
          <p className="opacity-50 text-lg md:text-xl uppercase">{temp.time}</p>
          <p className="text-lg md:text-2xl font-semibold font-sans py-2">{temp.degree || temp.domain}</p>
          <p className="text-base md:text-xl font-normal opacity-85">{temp.institute || temp.company}</p>
        </div>
      </div>
    ));
  return(
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
      <div className="flex flex-col md:flex-row justify-center text-custom-dark">
        <ExperienceContainer>
          {render(academicsArr, "text-red-400", "school")}
        </ExperienceContainer>
        <ExperienceContainer>
          {render(experienceArr, "text-orange-400", "work")}
        </ExperienceContainer>
      </div>
    </ScrollAnimation>
  )
};

const LinkSection = () => (
  <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
    <p className="text-center text-custom-dark text-base md:text-xl font-semibold px-7 md:px-0">Want to connect with me? 
      <span className="cursor-pointer m-2 text-orange-500 hover:underline" onClick={() => {
        window.open("https://www.linkedin.com/in/kiran-samanta-732604258/", "_blank");
      }}>
      Click here</span> 
    for my LinkedIn profile. ✌️</p>
  </ScrollAnimation>
);

export default Experience;