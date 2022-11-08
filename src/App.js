import logo from './logo.svg';
import './App.css';
import Links from './components/Links';
import Shortcuts from './components/Shortcuts';
import StoryList from './components/StoryList';
import Header from './components/Header';
import Contacts from './components/Contacts';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  // const { data } = useLoaderData();
  const [data, setData] = useState();

  async function getPeople() {
    const data = await fetch('https://randomuser.me/api/?results=30').then((res) => res.json());
    setData(data.results);

    return data.results;
  }

  useEffect(() => {
    getPeople();
  }, []);

  console.log('data:', data);

  const updatedArr = data?.map((person) => ({
    name: person.name.first + ' ' + person.name.last,
    image: person.picture.large,
    firstname: person.name.first,
  }));

  return (
    <Router>
      <div>
        <div className='fixed w-full z-20'>
          <Header updatedArr={updatedArr} />
        </div>
        <div className='grid grid-cols-8'>
          <div className='text-center col-span-2 col-start-2  pt-14  '>
            <div className='fixed'>
              <Links updatedArr={updatedArr} />
              <Shortcuts updatedArr={updatedArr} />
            </div>
          </div>
          <div className='grid col-span-2 col-start-4 justify-center pt-14'>
            <StoryList updatedArr={updatedArr} />
          </div>
          <div className='grid col-span-2 col-start-7 pt-14 w-full '>
            <div className='fixed'>
              <Contacts data={updatedArr} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
