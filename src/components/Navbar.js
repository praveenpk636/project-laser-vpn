import React, { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false)
  return (
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
            <li>About</li>
            <li>Features</li>
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
  );
}

export default Navbar;
