import React, { useState } from 'react';
import likeIcon from '../assets/like-svgrepo-com.svg';
import commentIcon from '../assets/comment-svgrepo-com.svg';
import shareIcon from '../assets/share-svgrepo-com.svg';
import likeIconBlue from '../assets/like-icon.svg';
import laughingIconBlue from '../assets/laughing-icon.svg';

const Post = ({ post, updatedArr }) => {
  const fakepic =
    'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-1/121024799_10220743815797577_8455288055242935987_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CpY9l4Kva4EAX_VS075&_nc_ht=scontent.fsdv2-1.fna&oh=00_AT_5N5H5mU8qblVNCaFaw0k7G_W1nm6_fILLazTYldFPSg&oe=63123358';

  const [commentsOpen, setCommentsOpen] = useState(false);
  const getLikes = (postLikes) => {
    var res = Object.values(postLikes).reduce((acc, val) => {
      acc = +acc + +val;
      return acc;
    }, []);
    return res;
  };

  return (
    <div className='shadow-sm border-gray-600 px-4 pt-4 flex flex-col bg-white rounded-2xl mb-4 gap-2 content-center '>
      <div className='flex items-center gap-2'>
        <img src={post.picture} className='h-10 rounded-full' alt='user_picutre' />
        <div>
          <div className='font-semibold text-sm'>{post.name}</div>
          <div className='text-[11px]'>{post.time}</div>
        </div>
      </div>

      {/* <div>Ron Klum . 20m</div> */}
      <div className='text-[15px]'>{post.content}</div>
      {post.uploadedPic ? (
        <div>
          <img src={post.uploadedPic} alt='picture_of_post' />
        </div>
      ) : (
        ''
      )}
      <div className='flex justify-between text-xs text-gray-500'>
        <div className='flex items-center pb-2'>
          <img className='h-4' src={likeIconBlue} alt='like-icon' />
          <img className='h-4' src={laughingIconBlue} alt='laughing-icon' />
          <span className='pl-2'>{getLikes(post.likes)}</span>
        </div>
        <div className='gap-1 flex cursor-pointer'>
          <span onClick={() => setCommentsOpen(!commentsOpen)}>
            {post.comments?.length > 0 ? post.comments?.length + ' Comments' : ''}
          </span>
          <span>{post.shares} Shares</span>
        </div>
      </div>

      <div
        className={`border-t text-sm justify-around items-center pt-2 flex font-semibold text-[#65676b] ${
          commentsOpen ? 'border-b py-1' : ''
        }`}>
        <div className='flex gap-1'>
          <img src={likeIcon} className='h-4' alt='like_icon' />
          <div>Like</div>
        </div>
        <div className='flex gap-1'>
          <img src={commentIcon} className='h-4' alt='like_icon' />
          <div>Comment</div>
        </div>
        <div className='flex gap-1'>
          <img src={shareIcon} className='h-4' alt='like_icon' />
          <div>Share</div>
        </div>
      </div>
      <div className='flex flex-col '>
        {commentsOpen &&
          post.comments?.map((comment) => (
            <div key={post.comments.image} className='flex flex-row gap-2'>
              <div className='h-7'>
                <img src={comment.image} className='h-full rounded-full' alt='AA' />
              </div>
              <div className='pb-2'>
                <div className='flex flex-col bg-slate-100 p-2 rounded-xl'>
                  <span className='text-xs font-semibold'>{comment.name}</span>
                  <span className='text-xs'>{comment.content}</span>
                </div>
                <div className='flex flex-row gap-2 font-semibold text-xs text-[#65676b]'>
                  <span>Like</span>
                  <span>Reply</span>
                  <span>{comment.time}h</span>
                </div>
              </div>
            </div>
          ))}
        {commentsOpen && (
          <div className='flex h-7 my-2 gap-1'>
            <div>
              <img src={updatedArr[0].image} className='h-full rounded-full' alt='AA' />
            </div>
            <input
              type='text'
              className='w-full h-full bg-gray-100 rounded-3xl placeholder:text-gray-400 placeholder-gray-500 px-3 placeholder:text-[16px]'
              placeholder='Write a comment...'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
