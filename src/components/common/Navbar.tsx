'use client';

import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';
import navLogo from './img/logo-nav.png';
import navBorder from './img/nav-border.png';
import useIsMobile from '@/hooks/useIsMobile';

export default function Navbar() {
  const [logoSize, setLogoSize] = useState(245); // Default logo size
  const [navSize, setNavSize] = useState(250);
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  useEffect(() => {
    if (navOpen && !isMobile) {
      setNavOpen(false);
    }
  }, [isMobile, navOpen]);

  useEffect(() => {
    //prevent scrolling behind the nav on mobile
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

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
    <header className="sticky top-0 z-50 w-full">
      {mounted &&
        (isMobile ? (
          <nav className="bg-white p-[0.5rem] sm:p-[1rem] flex justify-between">
            <Image
              src={navLogo}
              alt="The Fun Bug, Play Studio & Parties Logo"
              className="w-[100px]"
            />
            <div className="flex gap-[2rem] items-center">
              <Link
                href={'/parties'}
                className="font-medium border border-black hover:border-transparent rounded-lg px-[2rem] py-[0.5rem] my-[1rem] 
             transition-colors duration-300 bg-soft-pink hover:bg-dark-pink hover:text-white"
              >
                Book a Party
              </Link>

              <button
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="flex flex-col items-center justify-between w-[35px] h-[25px] p-0"
              >
                <div className="bg-dark-blue h-[2px] w-full " />
                <div className="bg-dark-blue h-[2px] w-full " />
                <div className="bg-dark-blue h-[2px] w-full " />
              </button>
            </div>
            {navOpen && (
              <div className="fixed top-[82px] left-0 h-screen w-screen bg-white">
                {/* Border image below the navbar */}
                <div
                  className="w-full h-[20px] bg-repeat-x bg-[length:auto_20px] mt-[0.5rem]"
                  style={{
                    backgroundImage: `url(${navBorder.src})`,
                  }}
                ></div>

                <div className="flex flex-col">
                  <NavLink link="/about" linkName="About" />
                  <NavLink link="/pricng" linkName="Pricing" />
                  <NavLink link="/parties" linkName="Parties" />
                  <NavLink link="/cafe" linkName="Cafe" />
                  <NavLink link="/news" linkName="News" />
                  <NavLink link="/contact" linkName="Contact" />
                </div>
              </div>
            )}
          </nav>
        ) : (
          <nav
            className={`bg-white w-full flex items-center justify-between mx-auto py-[1rem]  h-[${navSize}]`}
          >
            <div className="w-full flex max-w-[85vw] items-center justify-between mx-auto">
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
                    className="transition-all duration-300"
                    style={{ maxWidth: `${logoSize}px`, maxHeight: '100%' }} // Resizing logo
                  />
                </div>
              </div>
              <NavLink link="/cafe" linkName="Cafe" />
              <NavLink link="/news" linkName="News" />
              <NavLink link="/contact" linkName="Contact" />
            </div>
          </nav>
        ))}
      {/* Border image below the navbar */}
      <div
        className="w-full h-[40px] bg-repeat-x bg-[length:auto_20px]"
        style={{
          backgroundImage: `url(${navBorder.src})`,
        }}
      ></div>
    </header>
  );
}
