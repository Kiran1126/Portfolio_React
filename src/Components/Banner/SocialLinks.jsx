import React from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialLinks = ({urls, networks}) =>{
  return <li className='m-1'>
    <SocialIcon url={urls} network={networks} label="social-media-icons" bgColor="#353353" fgColor="#fff"/>
  </li>
}

export default SocialLinks;