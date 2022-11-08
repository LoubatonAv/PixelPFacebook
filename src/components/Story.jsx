const Story = ({ story }) => {
  return (
    <div className='relative h-[250px] w-[147px]'>
      <div>
        <img
          src={story.avatar}
          className='absolute rounded-full border-2 border-blue-600 top-2 left-2 h-[45px] w-[45px] object-cover'
        />
      </div>
      <img src={story.image} className='rounded-md h-full object-cover' />
      <div className='absolute bottom-1 left-2 text-white font-semibold text-xs '>{story.name}</div>
    </div>
  );
};

export default Story;
