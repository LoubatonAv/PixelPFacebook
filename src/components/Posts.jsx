import Post from './Post';

const Posts = ({ fakePosts, updatedArr }) => {
  return (
    <div className='pb-4'>
      {fakePosts.map((post) => (
        <Post post={post} updatedArr={updatedArr} />
      ))}
    </div>
  );
};

export default Posts;
