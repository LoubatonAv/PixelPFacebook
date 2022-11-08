import React from 'react';
import Posts from './Posts';
import PostStatus from './PostStatus';
import Story from './Story';
import uuid4 from 'uuid4';

const fakeStories = [
  {
    name: 'Ayala Hevroni',
    image: 'https://img.freepik.com/premium-vector/meadows-landscape-with-mountains-hill_104785-943.jpg?w=2000',
    avatar: 'https://i.insider.com/5cb8b133b8342c1b45130629?width=1136&format=jpeg',
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT240rrNYFYojFgSttu8FqYD8FaDArgv9E9dg&usqp=CAU',
    name: 'Itamar Bar Hod',
    image:
      'https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000',
  },
  {
    avatar: 'https://www.picturecorrect.com/wp-content/uploads/2013/03/better-people-photos.jpg',
    name: 'Rita Brita',
    image:
      'https://img.freepik.com/free-vector/best-scene-nature-landscape-mountain-river-forest-with-sunset-evening-warm-tone-illustration_1150-39403.jpg?w=2000',
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjidvk3DPBtaN3SXhqTDVhzve_yJEhYIE9xQ&usqp=CAU',
    name: 'Ramy Grinfeld',
    image:
      'https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
  },
  {
    avatar:
      'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=sxfMiTsD',
    name: 'Shai Swissa',
    image: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg',
  },
];

const fakePosts = [
  {
    id: uuid4(),
    picture: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Avner Luvton',
    time: '10:10',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, numquam.',
    image: '',
    commentCount: '201',
    likes: { sad: 100, happy: 200, like: 150 },
    shares: '100',
    comments: [
      {
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Mark Kaganov',
        content: 'Looks exactly like facebook!',
        time: '4',
      },
      {
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Rami Gildengberg',
        content: 'Nice job!',
        time: '2',
      },
      {
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        name: 'Dudi Aharonov',
        content: 'Hire me please!',
        time: '1',
      },
    ],
  },
  {
    id: uuid4(),

    picture: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Ayala Hevroni',
    time: '13:10',
    content: 'Nothing to write and I dont like seeing lorem ipsums.',
    image: '',
    commentCount: '3',
    uploadedPic: 'https://ursd.org/wp-content/uploads/2020/12/1.png',
    likes: '20',
    shares: '1',
    comments: [
      {
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Mark Kaganov',
        content: 'Hahaha so funny!',
        time: '4',
      },
      {
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Rami Gildengberg',
        content: 'Gimme more',
        time: '2',
      },
    ],
  },
  {
    id: uuid4(),

    picture: 'https://randomuser.me/api/portraits/women/96.jpg',
    name: 'Nunu',
    time: '20:12',
    content: 'Morning zih and zah.',
    image: '',
    commentCount: '20',
    likes: '5',
    shares: '2',
  },
  {
    id: uuid4(),
    picture: 'https://randomuser.me/api/portraits/women/42.jpg',
    name: 'Anna Zak',
    time: '10:10',
    content: 'Go to sleep.',
    image: '',
    commentCount: '2',
    likes: '1',
    shares: '2',
  },
];
const StoryList = ({ updatedArr }) => {
  return (
    <div>
      <div className='flex gap-2 pt-5 '>
        {fakeStories.map((story) => (
          <div key={story.image}>
            <Story story={story} />
          </div>
        ))}
      </div>
      <div className='h-[125px] mt-5   '>
        <PostStatus updatedArr={updatedArr} />
        <Posts fakePosts={fakePosts} updatedArr={updatedArr} />
      </div>
    </div>
  );
};

export default StoryList;
