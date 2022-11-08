import React from 'react';
import smileyIcon from '../assets/smiley.svg';
import imagesIcon from '../assets/images.svg';
import cameraIcon from '../assets/camera.svg';

const PostStatus = ({ updatedArr }) => {
  if (!updatedArr) return;
  return (
    <div className='bg-white px-2 py-3 mb-3 rounded-2xl h-content shadow-sm'>
      <div className='flex w-[99%] gap-4'>
        <img src={updatedArr[0]?.image} className='rounded-full h-9' alt='smiley_icon' />
        <input
          type='text'
          placeholder={`What's on your mind ,${updatedArr[0]?.firstname}?`}
          className='w-full bg-gray-100 rounded-3xl placeholder:text-gray-400 placeholder-gray-500 px-3'
        />
      </div>
      <div className='border-b-[1px] pt-2 '></div>
      <div className='grid-cols-3 grid pt-2 text-[#65676b] text-sm font-semibold'>
        <div className='flex col-span-1 col-start-1 justify-center gap-2'>
          <img src={cameraIcon} className='h-full' alt='smiley_icon' />
          <div>Live video</div>
        </div>
        <div className='flex col-span-1 col-start-2 justify-center gap-2'>
          <img src={imagesIcon} className='h-full' alt='smiley_icon' />
          <div>Photo/video</div>
        </div>
        <div className='flex col-span-1 col-start-3 justify-center gap-2'>
          <img src={smileyIcon} className='h-full' alt='smiley_icon' />
          <div>Feeling/activity</div>
        </div>
      </div>
    </div>
  );
};

export default PostStatus;
