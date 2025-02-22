import React from 'react';
import ProfilePhoto from '../../assets/KIRAN.gif';
import Links from '../Sidebar/Links';
import Copyright from '../Branding/Copyright';
import useSound from 'use-sound';
import TapSound from '../../assets/Music/TapMusic.mp3'

const Sidebar = ( {links} ) => {

  // On hover sound effect
  const [play, { stop }] = useSound(TapSound);

  return (
    <section className="bg-custom-dark h-screen md:w-1/5 grid place-items-center border-gray-500 sm:border-r fixed z-10 float-left">
      <div className='flex items-baseline'>
        <h1 className='text-white text-5xl font-bold'>Kiran</h1>
        <p className='text-red-600 text-9xl'>.</p>
      </div>
      <img className='h-52 w-52 cursor-pointer' src= {ProfilePhoto} alt="profile-photo" />
      <ul className='flex flex-col justify-center'>
        {
          links.map((temp, index) => (
            <li className="m-3 cursor-pointer" onMouseEnter={() => play()} onMouseLeave={() => stop()}>
              <Links 
                key={index} 
                Link={temp.link} 
                Icon={temp.icon} 
                Url={temp.url}>
              </Links>
            </li>
          ))
        }
      </ul>
      <Copyright />
    </section>
  )
};

export default Sidebar;