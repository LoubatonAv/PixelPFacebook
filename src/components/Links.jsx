import React from 'react';

import friendsIcon from '../assets/friends.svg';

// https://rapidmock.com/

const listOfLinks = [
  {
    description: 'Friends',
    image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png',
  },
  {
    description: 'Groups',
    image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png',
  },
  {
    description: 'Marketplace',
    image: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png',
  },
  {
    description: 'Watch',
    image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png',
  },
  {
    description: 'Memories',
    image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png',
  },
];

const Links = ({ updatedArr }) => {
  if (!updatedArr) return;
  return (
    <div>
      <div className='gap-3 flex flex-col pb-3'>
        <div className='flex gap-2 items-center'>
          <img src={updatedArr[0].image} className='rounded-full h-[36px]' />
          <div className='font-semibold text-sm'>{updatedArr[0].name}</div>
        </div>
        {listOfLinks.map((item) => (
          <div className='flex items-center gap-2' key={item.image}>
            <img src={item.image} className='first:rounded-full' />
            <div className='font-semibold text-sm'>{item.description}</div>
          </div>
        ))}
      </div>
      <div className='border-b-[2px] w-8/12'> </div>
    </div>
  );
};

export default Links;
