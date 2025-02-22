import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnContainer from "../Container/BtnContainer";
import SocialLinks from "./SocialLinks";
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import Music from "../../assets/Music/Music.mp3";

const Banner = ({ icons }) => {
  return (
    <div className="area flex flex-col justify-end items-center">
      <SoundBtn />
      <Circles />
      <BannerImage />
      <BannerText />
      <SocialLinksList icons={icons} />
      <BtnContainer>
        <button type="button">Hire Me</button>
      </BtnContainer>
      <ScrollDownLink />
    </div>
  );
};

const Circles = () => (
  <ul className="circles">
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li> 
    <li></li>
  </ul>
);

const BannerImage = () => (
  <img src="https://bolby-react.vercel.app/images/avatar-1.svg" alt="banner-photo" />
);

const BannerText = () => (
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
);

// Sound effect
const SoundBtn = () => {

  const [play, { pause }] = useSound(Music);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleOnClick = () => {
    {
      if(isPlaying){
        pause();
      }
      else{  
        play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex w-full h-full justify-end mt-5 mr-10">
      <div className={`bg-slate-600 text-slate-50 opacity-80 z-10 rounded-lg max-h-20 w-auto p-4 grid place-content-center 
        ${isPlaying ? "" : "animate-pulse"}
      `}>
        <p className="font-semibold">Click here!</p>
        <button onClick={handleOnClick} className="mt-1">
          <span className="material-symbols-outlined text-3xl cursor-pointer">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>
    </div>
  );
};

const SocialLinksList = ({ icons }) => (
  <ul className="flex m-5">
    {icons.map((icon, index) => (
      <SocialLinks key={index} urls={icon.url} networks={icon.network}></SocialLinks>
    ))}
  </ul>
);

const ScrollDownLink = () => (
  <NavLink to='/About'>
    <span title="Scroll down" className="material-symbols-outlined text-white text-3xl cursor-pointer mt-40 mb-7 animate-bounce">
      expand_circle_down
    </span>
  </NavLink>
);

export default Banner;
