import React from 'react';
import wow from '../assets/groups/wow.jpg';
import lol from '../assets/groups/lol.jpg';
import gikia from '../assets/groups/gikia.jpg';
import misrot from '../assets/groups/misrot.jpg';
import tibia from '../assets/groups/tibia.jpg';

// https://rapidmock.com/

const listOfLinks = [
  {
    description: 'משרות הייטק ושיווק ללא נסיון',
    image: misrot,
  },
  {
    description: 'Tibia',
    image: tibia,
  },
  {
    description: 'הגיקיה',
    image: gikia,
  },
  {
    description: 'League of Legends Community',
    image: lol,
  },
  {
    description: 'World of Warcraft Israel',
    image: wow,
  },
];

const Shortcuts = () => {
  return (
    <div>
      <div className='text-left pt-3 font-semibold text-gray-500 text-md'>Your shortcuts</div>
      <div className='gap-3 flex flex-col pt-2'>
        {listOfLinks.map((item) => (
          <div className='flex items-center gap-2' key={item.image}>
            <img src={item.image} className='rounded-xl h-[36px] w-[36px] object-cover' />
            <div className=' text-sm font-medium'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
