import React from 'react'
import './find-us.styles.css'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
export default function FindUs() {
  const openInNewTab = url => {
    // setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='find-us-dropDown'>
        <BsFacebook className='social-media-icon fb' onClick={()=>{openInNewTab('https://www.facebook.com/')}}/>
        <BsTwitter className='social-media-icon tw' onClick={()=>{openInNewTab('https://twitter.com/')}}/>
        <BsInstagram className='social-media-icon ig' onClick={()=>{openInNewTab('https://www.instagram.com/')}}/>
    </div>
  )
}
