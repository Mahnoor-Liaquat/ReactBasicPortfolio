import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
  
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar