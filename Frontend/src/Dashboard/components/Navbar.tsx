import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiOutlineUser } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <div className='fixed top-0 md:left-[18%] md:w-[82%] md:h-24  w-full bg-white  py-8 p-5 z-10'>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
          <div className='border rounded-full shadow-lg p-1 lg:hidden'>
            <AiOutlineMenuFold size={20} />
          </div>
          <div className='border rounded-full shadow-lg p-1'>
            <AiOutlineSearch size={20} />
          </div>
        </div>

        <div className='flex gap-3'>
          <div className='border rounded-full shadow-lg p-1'>
            <IoIosNotificationsOutline size={20} />
          </div>
          <div className='border rounded-full shadow-lg p-1'>
            <HiOutlineUser size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
