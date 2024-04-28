import React from 'react';
import Navbar from './Navbar';
import './contact.css';  
import me from '../homeimg.png';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='content'>
        <main>
          <h1>Contact Me</h1>
          <div className="contact-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>

            </form>
            
            <img src={me} alt="Me" className="contact-image" />
          </div>
        </main>
      </div>
    </>
  )
}

export default Contact;
