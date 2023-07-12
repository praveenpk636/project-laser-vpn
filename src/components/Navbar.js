import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false)
  return (
    <section className='head'>
    <div className="header">
        <div className="">
        <img
                  src="/assets/img/Logo.png"
                  width="100"
                  alt="logo"
                  className="img-fluid"
                />
        </div>
      <div>
    <nav className="nav">
        <ul>
            <li>Home</li>
            <li href='#about'>About</li>
            <li><AnchorLink href='#features'>Features</AnchorLink></li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
        </ul>

    </nav>
      </div>
      <div>
        <a className='b1' href=''>Sign In</a>
        <a className='b1 b2' href=''>Sign Up</a>
      </div>
      </div>
      </section>
  );
}

export default Navbar;
