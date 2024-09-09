'use client';

import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import navLogo from './img/logo-nav.png';
import navBorder from './img/nav-border.png';

export default function Navbar() {
  const [logoSize, setLogoSize] = useState(245); // Default logo size
  const [navSize, setNavSize] = useState(250);

  // Function to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setLogoSize(125); // Shrink logo size when scrolling
        setNavSize(130);
      } else {
        setLogoSize(245); // Restore original size at top
        setNavSize(250);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav
        className={`w-full flex max-w-[85vw] items-center justify-between mx-auto py-[1rem]  h-[${navSize}]`}
      >
        <NavLink link="/about" linkName="About" />
        <NavLink link="/pricng" linkName="Pricing" />
        <NavLink link="/parties" linkName="Parties" />
        <div
          className="flex items-center justify-center"
          style={{ height: '100%' }}
        >
          <div className="w-[185px] flex justify-center">
            <Image
              src={navLogo}
              alt="The Fun Bug, Play Studio & Parties Logo"
              className="transition-all duration-300" // Smooth transition
              style={{ maxWidth: `${logoSize}px`, maxHeight: '100%' }} // Resizing logo
            />
          </div>
        </div>
        <NavLink link="/cafe" linkName="Cafe" />
        <NavLink link="/news" linkName="News" />
        <NavLink link="/contact" linkName="Contact" />
      </nav>
      {/* Border image below the navbar */}
      <div
        className="w-full h-[40px] bg-repeat-x bg-[length:auto_20px]"
        style={{
          backgroundImage: `url(${navBorder.src})`, // Dynamically referencing the relative path image
        }}
      ></div>
    </div>
  );
}
