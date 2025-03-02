import React, { useState } from 'react';
import Heading from "../Heading/Heading";
import BtnContainer from "../Container/BtnContainer";
import ScrollAnimation from 'react-animate-on-scroll';
import Copyright from '../Branding/Copyright';

const Contact = () => (
  <section className="bg-custom-dark h-auto md:h-screen w-screen md:w-4/5 md:float-right flex flex-col justify-center md:justify-evenly items-center overflow-hidden py-7 md:p-0">
    <Heading faded="Contact" bold="Get In Touch" theme="text-white" borderColor="border-orange-500" />
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <ul className='flex flex-col items-center md:items-stretch md:flex-row gap-y-10 md:gap-x-40'>
        <li>
          <Comment />         
        </li>
        <li>
          <FormSection />
        </li>
        <li className='md:hidden'>
          <Copyright />
        </li>
      </ul>
    </ScrollAnimation>
  </section> 
);

const Comment = () => (
  <div className="flex flex-col text-slate-50 mt-10 text-xl w-full">
    <p className="text-xl md:text-2xl font-bold text-center md:text-left">Let's talk about everything!</p>
    <div className="flex flex-wrap justify-center">
      <p className='text-base md:text-2xl'>Don't like forms? Send me an 
      <span className="text-orange-500 cursor-pointer ml-2 hover:underline" 
        onClick={() => window.open('mailto:kiransamanta945@gmail.com')}
      >
        email
      </span>
      . 👋</p>
    </div>
  </div>
);

const FormSection = () => (
  <form action="#" className="max-w-[425px]">
    <div className="flex flex-col text-lg gap-1 md:gap-2 items-center md:items-stretch">
      <img className="w-full h-44 object-cover rounded-md cursor-not-allowed" src="https://i.pinimg.com/originals/9c/60/36/9c6036872d32db27c82c47c8a5657777.gif" alt="meme" />
      <div className="flex flex-col md:flex-row w-full gap-1 md:gap-2">
        <input type="text" name="name" className="h-10 md:h-14 w-full md:w-1/2 text-sm md:text-lg rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Your name" required />
        <input type="email" name="email" className="h-10 md:h-14 w-full md:w-1/2 text-sm md:text-lg rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Email address" required />
      </div>
      <input type="text" name="subject" className="h-10 md:h-14 w-full text-sm md:text-lg rounded-md px-5 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Subject" required />
      <textarea name="message" className="h-40 p-3 w-full text-sm md:text-lg rounded-md px-5 mb-2 md:mb-0 bg-slate-800 text-slate-200 focus:outline-blue-500" placeholder="Message" required />
      <BtnSection />
    </div>
  </form>
);

const BtnSection = () => {

  const [sentMsg, setSentMsg] = useState(false);

  return (
    <BtnContainer onClick={() => setSentMsg(!sentMsg)}>
      <p className="mr-1">
        {sentMsg ? "ধন্যবাদ!" : "পাঠান"}
      </p> 
      <span className="material-symbols-outlined text-lg md:text-xl">
        {sentMsg ? "" : "send"}
      </span>
    </BtnContainer>
  );
};

export default Contact;
