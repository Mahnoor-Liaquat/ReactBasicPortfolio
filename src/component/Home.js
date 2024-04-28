import React from 'react';
import me from '../homeimg.png';
import Navbar from './Navbar';
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='content'>
        <main>
          <div>
            <h1>Hi,</h1>
            <h1>I'm Mahnoor Liaquat Ali,</h1>
            <h1>Front-end Developer</h1>
            <p>I design and develop experiences that make people's lives simpler through Web and Mobile App. I work with HTML5, CSS3, JavaScript, and ReactJs.</p>
          </div>

          <div className='buttons'>
            <button className='hireme btn'>HIRE ME</button>
            <button className='seeproject btn'>SEE MY PROJECTS</button>
          </div>
        </main>
        <figure>
          <img
              src={me}
              alt="me"
              className='me-img' width={400} height={350}
          />
        </figure>
      </div>
    </>
  );
}

export default Home;
