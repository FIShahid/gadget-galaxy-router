import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className=' bg-gray-600 px-12 py-8 flex justify-center md:justify-between '>
        <div className='hidden md:block'>
          <Link className='font-mono font-bold text-2xl text-green-500' to='/'>
            Gadget Galaxy
          </Link>
        </div>
        <div className='flex gap-5 text-xl   '>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/reviews'>Reviews</CustomLink>
          <CustomLink to='/dashboard'>Dashboard</CustomLink>
          <CustomLink to='/blog'>Blog</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
        </div>
      </div>
    );
};

export default Header;