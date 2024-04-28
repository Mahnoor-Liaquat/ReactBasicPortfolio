import React from 'react';
import Navbar from './Navbar';
import './project.css'; 

const Project = () => {
  return (
    <>
      <Navbar />

      <div className='content'>
        <main>
          <h1>My Projects</h1>
          <div className="projects-container">
          
            <div className="project-card">
              <h2>Expense Tracker App</h2>
              <p>This app allows users to monitor their expenses effectively, providing features such as adding new expense entries and categorizing them by date and amount. The user-friendly interface enhances financial management with ease.</p>
              <a href="https://reactexpensetracker1.netlify.app/" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Spicy Corner App</h2>
              <p>Spicy Corner Biryani Center brings you the delights of traditional biryani cooked with precision. This app serves as a digital gateway to explore menu items, place orders online, and enjoy the rich flavors from the comfort of your home.</p>
              <a href="https://spicycorner.netlify.app" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Amazon Clone</h2>
              <p>This project replicates the core functionalities of Amazon's interface, providing a seamless shopping experience with a user-friendly product listing and checkout process designed using React.</p>
              <a href="https://amazonlandingpage1.netlify.app" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Mera Karachi</h2>
              <p>Explore Karachi's vibrant dining scene with Mera Karachi. This app features top dining spots, user reviews, and the ability to make reservations directly through the app, celebrating Karachi's rich culinary culture.</p>
              <a href="https://merakarachi.netlify.app/" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Pomodoro Timer</h2>
              <p>Boost productivity using this Pomodoro Timer app, which helps you manage time effectively using the Pomodoro technique. It allows users to set work and break intervals to maximize efficiency throughout the day.</p>
              <a href="https://pomodorotimeer.netlify.app" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Animated Portfolio</h2>
              <p>Showcasing a creative and interactive portfolio, this app uses advanced animations to bring your professional skills and projects to life, ensuring a memorable first impression with potential employers or clients.</p>
              <a href="https://animatedportfolioapp.netlify.app/" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Voting Game</h2>
              <p>This fun and engaging web app allows friends to vote on custom polls, be it favorite movies, food, or any other topic, fostering interaction and fun through a simple yet captivating voting interface.</p>
              <a href="https://friendvotingapp.netlify.app" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Calculator</h2>
              <p>A sleek and functional calculator app designed for both simple and complex mathematical operations. Its clean design and intuitive interface make it ideal for daily calculations.</p>
              <a href="https://calculatorbymahnoor.netlify.app/" className="project-link">View Project</a> 
            </div>

            <div className="project-card">
              <h2>Food Panda Clone</h2>
              <p>This project aims to mimic the Food Panda app, providing a user-friendly platform to browse restaurants, view menus, and order food online with convenience and speed.</p>
              <a href="https://foodpandaassignment.netlify.app/" className="project-link">View Project</a> 
            </div>
            
          </div>
        </main>
      </div>
    </>
  )
}

export default Project;
