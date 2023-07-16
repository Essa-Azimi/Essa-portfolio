import React, { useState } from 'react';
import { logo } from '../assets';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=' absolute w-full flex items-center py-2 z-20'>
      <div className='ml-[3vw] flex w-screen 
        justify-start items-center'>
        <motion.div
          whileHover={{
            scale: 1.05
          }}
          className='fixed mt-[70px] w-[36px] h-[36px] '
        >
          <a href='/' onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt="logo" />
          </a>
        </motion.div>
      </div>
      
      <div
        className='mr-[3vw] flex flex-1 uppercase w-screen font-avantGarde
        tracking-wide text-[#b7ab98] text-[12px] 
        font-extrabold justify-end items-center'
      >
        <motion.div
          whileHover={{ scale: 1, translateY: 1 }}
          whileTap={{
            scale: 0.95,
          }}
          className='fixed mt-[60px]'
        >
          <a href='#about' className=''>
            About
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1, translateY: 1 }}
          whileTap={{
            scale: 0.95,
          }}
          className='fixed mt-[100px]'
        >
          <a href='#experience' className=''>
            Experiences
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1, translateY: 1 }}
          whileTap={{
            scale: 0.95,
          }}
          className='fixed mt-[140px]'
        >
          <a href='#contact' className=''>
            Contact
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
