import React from "react";
import Heading from "../Heading/Heading";
import BtnContainer from "../Container/BtnContainer";
import Resume from "../../assets/Copy of Resume.pdf"

  // This array of objects is used for the Experience numbers
  const experienceArr = [
    {
      icon: "local_cafe",
      number: "10",
      content: "Cup of coffee"
    },
    {
      icon: "local_fire_department",
      number: "20",
      content: "Projects completed"
    },
    {
      icon: "group",
      number: "30",
      content: "Satisfied clients"
    },
    {
      icon: "editor_choice",
      number: "40",
      content: "Nominees winner"
    }
  ];

  // This array is for the details part in the About section
  const progressArr = [
    {
      domain: "Web development",
      progress: "90%",
      spanColor: "bg-yellow-500",
      width: "w-11/12"
    },
    {
      domain: "DSA",
      progress: "80%",
      spanColor: "bg-red-500",
      width: "w-4/5"
    },
    {
      domain: "Competitive programming",
      progress: "75%",
      spanColor: "bg-blue-500",
      width: "w-9/12"
    }
  ];

  const About = () => (
    <div className="bg-white h-screen w-4/5 float-right flex flex-col justify-evenly">
      <Heading faded="About Me" bold="Know Me More" theme="text-black" borderColor="border-blue-500" /> 
      <AboutSection />
      <ExperienceSection />
    </div>
  );
  
  const AboutSection = () => (
    <section className="flex items-start justify-evenly">
      <img src="https://bolby-react.vercel.app/images/avatar-2.svg" alt="icon" />
      <div className="h-0 w-0 border-t-[13px] border-r-[20px] border-b-[13px] border-solid border-t-transparent border-b-transparent border-l-[#474646] absolute right-[55.5%] mt-10" />
      <div className="h-auto max-w-[60%] rounded-lg flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 p-9">
        <AboutText />
        <ProgressSection />
      </div>
    </section>
  );
  
  const AboutText = () => (
    <div className="flex flex-col items-start w-2/4 gap-7">
      <p className="text-1xl font-medium font-sans opacity-70">I’m Kiran Samanta, a passionate and tech-driven student dedicated to transforming innovative ideas into reality.</p>
      <BtnContainer>
        <button type="button" formTarget="_blank" onClick={() => window.open(Resume, '_blank', 'noopener,noreferrer')}>Download CV</button>
      </BtnContainer>
    </div>
  );
  
  const ProgressSection = () => (
    <div className="flex w-2/4 flex-col gap-3">   
      {progressArr.map((temp, index) => (
        <React.Fragment key={index}>
          <div className="flex justify-between font-sans">
            <label className="font-mono font-bold opacity-75">{temp.domain}</label>
            <label className="font-mono font-bold opacity-75">{temp.progress}</label>
          </div>
          <span className={`${temp.spanColor} ${temp.width} h-1.5 rounded-lg`} />
        </React.Fragment>
      ))}
    </div>
  );
  
  const ExperienceSection = () => (
    <section className="flex justify-evenly px-14">
      {experienceArr.map((temp, index) => (
        <div className="flex gap-4 justify-center" key={index}>
          <span className="material-symbols-outlined text-5xl opacity-20">{temp.icon}</span>
          <div className="block">
            <p className="text-4xl text-custom-dark font-bold">{temp.number}</p>
            <p className="text-1xl text-custom-dark font-normal mt-1 opacity-85">{temp.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
  
  export default About;