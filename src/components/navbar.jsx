import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import styled from 'styled-components';



const Navbar = () => {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/ashish-kumar-mishra-74341617b/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/coderashu31';
  };

  const handleGmailClick = () => {
    window.location.href = 'mailto:ashishrkl31@gmail.com';
  };

  const handleTwitterClick = () => {
    window.location.href = 'https://x.com/kumar_ashi91322';
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center'>
        <div>
          <h1 className='bg-gradient-to-r from-blue-300 via-pink-500 to-blue-600 bg-clip-text text-5xl tracking-tight text-transparent'>
            MY PORTFOLIO
          </h1>
        </div>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedinIn style={{ cursor: 'pointer' }} onClick={handleLinkedInClick} />
        <FaGithub style={{ cursor: 'pointer' }} onClick={handleGithubClick} />
        <SiGmail style={{ cursor: 'pointer' }} onClick={handleGmailClick} />
        <FaXTwitter style={{ cursor: 'pointer' }} onClick={handleTwitterClick} />
      </div>
    </nav>
  );
};

export default Navbar;
