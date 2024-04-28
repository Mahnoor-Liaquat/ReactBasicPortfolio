import React from 'react';
import Navbar from './Navbar';
import './skill.css';  

const Skills = () => {
  return (
    <>
      <Navbar />

      <div className='content'>
        <main>
          <div>
            <h1>My Skills</h1>
            <p>Over the years, I have honed a range of technical skills that enable me to build effective and engaging digital solutions. Below is a list of my core competencies:</p>
            
            <h2>Web Development</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>

            <h2>Software Development</h2>
            <ul>
              <li>C</li>
              <li>C#</li>
            </ul>

            <h2>Tools and Technologies</h2>
            <ul>
              <li>Draw.io for diagrams and flowcharts</li>
              <li>Visual Paradigm for UML modeling</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default Skills;
