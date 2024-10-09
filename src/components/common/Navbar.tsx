'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import navLogo from './img/logo-nav.png';
import navBorder from './img/nav-border.png';
import useIsMobile from '@/hooks/useIsMobile';
import ButtonLink from './ButtonLink';

export default function Navbar() {
  const [logoSize, setLogoSize] = useState(245); // Default logo size
  const [navSize, setNavSize] = useState(250);
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(''); // Track the current path

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts

    // Check the current path using window.location.pathname
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (navOpen && !isMobile) {
      setNavOpen(false);
    }
  }, [isMobile, navOpen]);

  useEffect(() => {
    // Prevent scrolling behind the nav on mobile
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

  // Check if the current path matches a link
  const isActiveLink = (link: string) => {
    return currentPath === link;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {mounted &&
        (isMobile ? (
          <nav className="bg-white p-[0.5rem] sm:p-[1rem] flex justify-between">
            <Link href="/">
              <Image
                src={navLogo}
                alt="The Fun Bug, Play Studio & Parties Logo"
                className="w-[100px]"
                priority={true}
              />
            </Link>
            <div className="flex gap-[2rem] items-center">
              <ButtonLink
                buttonText="Book a Party"
                buttonLink="/parties#reserve"
                buttonClass="hidden xxs:block bg-soft-pink/50 hover:bg-soft-pink"
              />
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="relative flex flex-col items-center justify-between w-[35px] h-[25px] p-0 mr-[0.5rem]"
              >
                <div
                  className={`bg-black h-[2px] w-full transition-all duration-300 ease-in-out ${
                    navOpen ? 'rotate-45 translate-y-[16px]' : ''
                  }`}
                />
                <div
                  className={`bg-black h-[2px] w-full transition-opacity duration-300 ease-in-out ${
                    navOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div
                  className={`bg-black h-[2px] w-full transition-all duration-300 ease-in-out ${
                    navOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </button>
            </div>
            {navOpen && (
              <div className="fixed top-[82px] left-0 h-screen w-screen bg-white">
                <div
                  className="h-[3px] w-full mt-[0.5rem]"
                  style={{
                    background:
                      'linear-gradient(to left, #FDD7EC 0%, #FECDA1 33%, #FBFEC1 66%, #D9EBDD 100%',
                  }}
                />

                <div className="flex flex-col">
                  <NavLink
                    link="/about"
                    linkName="About"
                    isActive={isActiveLink('/about')}
                  />
                  <NavLink
                    link="/pricing"
                    linkName="Pricing"
                    isActive={isActiveLink('/pricing')}
                  />
                  <NavLink
                    link="/parties"
                    linkName="Parties"
                    isActive={isActiveLink('/parties')}
                  />
                  <NavLink
                    link="/cafe"
                    linkName="Cafe"
                    isActive={isActiveLink('/cafe')}
                  />
                  <NavLink
                    link="/news"
                    linkName="News"
                    isActive={isActiveLink('/news')}
                  />
                  <NavLink
                    link="/contact"
                    linkName="Contact"
                    isActive={isActiveLink('/contact')}
                  />
                </div>
              </div>
            )}
          </nav>
        ) : (
          <nav
            className={`bg-white w-full flex items-center justify-between mx-auto py-[0.5rem] h-[${navSize}] md:px-[1rem]`}
          >
            <div className="w-full flex max-w-[1200px] items-center justify-between mx-auto">
              <NavLink
                link="/about"
                linkName="About"
                isActive={isActiveLink('/about')}
              />
              <NavLink
                link="/pricing"
                linkName="Pricing"
                isActive={isActiveLink('/pricing')}
              />
              <NavLink
                link="/parties"
                linkName="Parties"
                isActive={isActiveLink('/parties')}
              />
              <div
                className="flex items-center justify-center"
                style={{ height: '100%' }}
              >
                <div className="w-[185px] lg:w-[245px] flex justify-center">
                  <Link href="/">
                    <Image
                      src={navLogo}
                      alt="The Fun Bug, Play Studio & Parties Logo"
                      className="transition-all duration-300 w-full"
                      style={{ maxWidth: `${logoSize}px`, maxHeight: '100%' }} // Resizing logo
                      priority={true}
                    />
                  </Link>
                </div>
              </div>
              <NavLink
                link="/cafe"
                linkName="Cafe"
                isActive={isActiveLink('/cafe')}
              />
              <NavLink
                link="/news"
                linkName="News"
                isActive={isActiveLink('/news')}
              />
              <NavLink
                link="/contact"
                linkName="Contact"
                isActive={isActiveLink('/contact')}
              />
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
