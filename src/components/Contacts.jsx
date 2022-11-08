import React from 'react';

const Contacts = ({ data }) => {
  if (!data) return;
  return (
    <div className='w-[300px]'>
      <div className='border-b-[1px] my-3 font-medium pb-2'>Sponsored</div>
      <div>
        <div className='justify-between flex'>
          <span className='font-medium text-[#65676b]'>Friend requests</span>
          <span className='text-xs text-blue-900 underline'>See all</span>
        </div>
        <div className='flex border-b-[1px] py-2 w-[300px] gap-2 mb-3'>
          <img
            className='rounded-full h-14 w-14 object-cover'
            alt='lalala'
            src='https://thumbs.dreamstime.com/b/portrait-attractive-young-woman-who-sitting-cafe-cafe-urban-lifestyle-random-portrait-portrait-attractive-184127657.jpg'
          />
          <div className='flex flex-col'>
            <span className='font-medium'>Sharon Burg</span>
            <span className='text-xs pb-2'>1 Mutual friend</span>
            <div className='flex gap-1'>
              <button className='bg-[#1B74E4] px-7 py-1 text-sm font-medium text-white rounded-md'>Confirm</button>
              <button className='bg-[#E4E6EB] px-7 py-1 text-sm rounded-md font-medium'>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {data.map((person) => (
          <div key={person.image} className='flex items-center '>
            <img className='rounded-full h-[40px] w-[40px]' src={person.image} alt='person_picture' />
            <div className='font-semibold text-xs '>{person.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
