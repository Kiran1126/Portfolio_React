import React from "react";
import { NavLink } from "react-router-dom";
import BtnContainer from "../Container/BtnContainer";
import SocialLinks from "./SocialLinks";
import Typewriter from 'typewriter-effect';

const Banner = ({ icons }) => {
  return (
    <div className="h-screen w-4/5 bg-custom-dark flex flex-col justify-end items-center float-right">
      <img src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="banner-photo" />
      <div className="block">
        <p className="text-4xl text-white font-bold my-3 text-center">Kiran Samanta</p>
        <div className="text-2xl text-yellow-500 flex justify-center">
          <p className="mr-2">I'm a</p>
          <Typewriter
            options={{
            strings: ['Software developer.', 'Photography lover.'],
            autoStart: true,
            loop: true,
            }}
          />
        </div>
      </div>
      <ul className="flex m-5">
        {icons.map((icon, index) => (
          <SocialLinks key={index} urls={icon.url} networks={icon.network}></SocialLinks>
        ))} 
      </ul>
      <BtnContainer>
        <button type="button">Hire Me</button>
      </BtnContainer>
      <NavLink to='/About'>
        <span title="Scroll down" class="material-symbols-outlined text-white text-3xl cursor-pointer mt-40 mb-7 animate-bounce">
          expand_circle_down
        </span>
      </NavLink>
    </div>
  );
};

export default Banner;