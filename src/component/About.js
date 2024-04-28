import React from 'react'
import me from '../homeimg.png';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />

      <div className='content'>
        <main>
          <div>
            <h1>About Me,</h1>
            <h2>I'm Mahnoor Liaquat Ali,</h2>
            <h3>Front-end Developer</h3>
            <p>As a front-end developer, I specialize in crafting beautiful and functional user interfaces. My journey in web development started with HTML5 and CSS3, and has since expanded to include JavaScript and ReactJS. I'm passionate about designing and developing digital experiences that improve everyday life for users.</p>
            <p>Throughout my career, I have contributed to web and mobile projects that focus on user-centric design and accessibility. I am continuously learning and adapting to new technologies to stay at the forefront of industry trends and best practices.</p>
          </div>
          
        </main>
        <figure>
          <img
            src={me}
            alt="Mahnoor Liaquat Ali"
            className='me-img' width={400} height={350}
          />
        </figure>
      </div>
    </>
  )
}

export default About;
