import React from 'react';
import FacebookLogo from '../assets/icons8-facebook.svg';
import dotIcon from '../assets/dots.svg';
import messageIcon from '../assets/message.svg';
import bellIcon from '../assets/bell.svg';
import Homee from '../assets/home.svg';
import play from '../assets/play.svg';
import marketIcon from '../assets/marketplace.svg';
import gamingIcon from '../assets/gaming.svg';
import groupsIcon from '../assets/groups.svg';
import blueHomeIcon from '../assets/bluehome.svg';
import blueplayIcon from '../assets/blueplay.svg';
import blueMarketIcon from '../assets/bluemarketplace.svg';
import blueGamingIcon from '../assets/bluegaming.svg';
import blueGroupsIcon from '../assets/bluegroups.svg';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ updatedArr }) => {
  const location = useLocation();

  if (!updatedArr) return;

  return (
    <div className='bg-white'>
      <div className='shadow-xl h-full grid grid-cols-6 pt-1'>
        <div className='flex h-[45px] py-[2px] ml-2 gap-2'>
          <img className='h-full py-[3px]' src={FacebookLogo} />
          <label>
            <input
              type='text'
              className='bg-gray-100 rounded-full my-1 p-[8px] pl-8 text-xs text-gray-400 placeholder-gray-500 w-full'
              placeholder='Search Facebook'
            />
          </label>
        </div>
        <div className='h-[42px] flex col-start-3 col-span-4 items-center gap-1'>
          <div
            className={
              location.pathname.includes('home') ? 'border-b-2 border-blue-500 h-full mt-3 w-[13%]' : 'w-[13%]'
            }>
            <Link to='/facebook/home' className='justify-center flex'>
              <img
                className={location.pathname.includes('home') ? 'h-2/3' : 'h-2/3 cursor-pointer'}
                src={location.pathname.includes('home') ? blueHomeIcon : Homee}
              />
            </Link>
          </div>

          <div
            className={
              location.pathname.includes('watch') ? 'border-b-2 border-blue-500 h-full mt-3  w-[13%]' : ' w-[13%]'
            }>
            <Link to='/facebook/watch' className='justify-center flex'>
              <img
                className={location.pathname.includes('watch') ? 'h-2/3' : 'h-2/3 cursor-pointer'}
                src={location.pathname.includes('watch') ? blueplayIcon : play}
              />
              <div className='border-b-2 border-blue-800 absolute top-0'></div>
            </Link>
          </div>
          <div
            className={
              location.pathname.includes('market') ? 'border-b-2 border-blue-500 h-full mt-3  w-[13%]' : ' w-[13%]'
            }>
            <Link to='/facebook/market' className='justify-center flex'>
              <img
                className={location.pathname.includes('market') ? 'h-2/3' : 'h-2/3 cursor-pointer'}
                src={location.pathname.includes('market') ? blueMarketIcon : marketIcon}
              />
              <div className='border-b-2 border-blue-800 absolute top-0'></div>
            </Link>
          </div>
          <div
            className={
              location.pathname.includes('groups') ? 'border-b-2 border-blue-500 h-full mt-3  w-[13%]' : ' w-[13%]'
            }>
            <Link to='/facebook/groups' className='justify-center flex'>
              <img
                className={location.pathname.includes('groups') ? 'h-2/3' : 'h-2/3 cursor-pointer'}
                src={location.pathname.includes('groups') ? blueGroupsIcon : groupsIcon}
              />
              <div className='border-b-2 border-blue-800 absolute top-0'></div>
            </Link>
          </div>
          <div
            className={
              location.pathname.includes('gaming') ? 'border-b-2 border-blue-500 h-full mt-3  w-[13%]' : ' w-[13%]'
            }>
            <Link to='/facebook/gaming' className='justify-center flex'>
              <img
                className={location.pathname.includes('gaming') ? 'h-2/3' : 'h-2/3 cursor-pointer'}
                src={location.pathname.includes('gaming') ? blueGamingIcon : gamingIcon}
              />
              <div className='border-b-2 border-blue-800 absolute top-0'></div>
            </Link>
          </div>
        </div>
        <div className='col-start-7 col-span-1 flex  h-[90%] gap-2 pt-2 mr-5'>
          <div className='bg-gray-200 rounded-full p-2 '>
            <img className='h-4' src={dotIcon} />
          </div>
          <div className='bg-gray-200 rounded-full p-2'>
            <img className='h-4' src={messageIcon} />
          </div>
          <div className='bg-gray-200 rounded-full p-2'>
            <img className='h-4' src={bellIcon} />
          </div>
          <img className='rounded-full h-[32px]' src={updatedArr[0]?.image} />
        </div>
      </div>
    </div>
  );
};

export default Header;
