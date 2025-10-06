'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use the new `usePathname` hook instead
import navLogo from './img/logo-nav.png';
import navLogoMobile from './img/logo-nav-mobile.png';
import navBorder from './img/nav-border.png';
import useIsMobile from '@/hooks/useIsMobile';
import ButtonLink from './ButtonLink';

export default function Navbar() {
  const [logoWidth, setLogoWidth] = useState(245); // Default logo size
  const [navHeight, setNavHeight] = useState(0); //Default nav height
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile(1024);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Track the current path using the `usePathname` hook
  const [showButton, setShowButton] = useState(false);

  const navLinks = [
    {
      link: '/parties',
      linkName: 'Parties',
    },
    {
      link: '/pricing',
      linkName: 'Pricing',
    },
    {
      link: '/about',
      linkName: 'About',
    },
    {
      link: '/cafe',
      linkName: 'Café',
    },
    {
      link: '/news',
      linkName: 'News',
    },
    {
      link: '/contact',
      linkName: 'Contact',
    },
  ];

  const firstHalfLinks = navLinks.slice(0, 3);
  const secondHalfLinks = navLinks.slice(3);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  // Close the mobile menu when the route changes
  useEffect(() => {
    if (navOpen) {
      setNavOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Close menu on route change

  useEffect(() => {
    if (navOpen && !isMobile) {
      setNavOpen(false);
    }
  }, [isMobile, navOpen]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setLogoWidth(125); // Shrink logo size when scrolling
        setNavHeight(104);
        setShowButton(true); //Show booking button when logo shrinks
      } else {
        setLogoWidth(245); // Restore original size at top
        setNavHeight(186.5);
        setShowButton(false); //hide booking button when logo is large
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile && navHeight !== 90) {
      setNavHeight(90);
    }
  }, [isMobile, navHeight]);

  useEffect(() => {
    if (!isMobile) {
      setNavHeight(186.5);
    }
  }, [isMobile]);

  const isActiveLink = (link: string) => {
    return pathname === link;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        id="fixed-height"
        className="min-h-[90px] lg:min-h-[186px] h-fit bg-white"
        style={{
          height: `${navHeight}px`,
          minHeight: `${navHeight ? `${navHeight}px` : ''}`,
        }}
      >
        {mounted && // Ensure that the component is only rendered after mounting
          (isMobile ? (
            <nav className="bg-white p-[0.5rem] flex justify-between h-full">
              <Link href="/">
                <Image
                  src={navLogoMobile}
                  alt="The Fun Bug, Play Studio & Parties Logo"
                  className="w-[100px]"
                  priority={true}
                  height={171}
                  width={243}
                  sizes="100px"
                />
              </Link>
              <div className="flex gap-[2rem] items-center">
                <div className="h-[56px] flex items-center">
                  <ButtonLink
                    buttonText="Book Now"
                    buttonLink="https://thefunbug.as.me/"
                    buttonClass="bg-soft-blue hover:bg-worm-blue"
                    external={true}
                  />
                </div>
                <button
                  onClick={() => setNavOpen(!navOpen)}
                  className="relative flex flex-col items-center justify-between w-[35px] h-[25px] p-0 mr-[0.5rem]"
                  aria-label={
                    navOpen ? 'Close navigation menu' : 'Open navigation menu'
                  }
                  aria-expanded={navOpen}
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
                <div className="fixed left-0 h-screen w-screen bg-white top-[82px]">
                  <div
                    className="h-[3px] w-full mt-[0.5rem]"
                    style={{
                      background:
                        'linear-gradient(to left, #FDD7EC 0%, #FECDA1 33%, #FBFEC1 66%, #D9EBDD 100%',
                    }}
                  />
                  <div className="flex flex-col">
                    {navLinks.map((l) => (
                      <NavLink
                        key={l.linkName}
                        link={l.link}
                        linkName={l.linkName}
                        isActive={isActiveLink(l.link)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </nav>
          ) : (
            <nav
              className={`relative bg-white w-full flex items-center justify-between mx-auto py-[0.5rem] md:px-[1rem]`}
            >
              <div className="w-full flex max-w-[1200px] items-center justify-between mx-auto">
                {firstHalfLinks.map(({ link, linkName }) => (
                  <NavLink
                    key={link}
                    link={link}
                    linkName={linkName}
                    isActive={isActiveLink(link)}
                  />
                ))}
                <div
                  className="flex items-center justify-center"
                  style={{ height: '100%' }}
                >
                  <div className="w-[185px] lg:w-[245px] flex justify-center">
                    <Link href="/">
                      <Image
                        src={navLogo}
                        height={341}
                        width={485}
                        alt="The Fun Bug, Play Studio & Parties Logo"
                        className="transition-all duration-100 w-full"
                        style={{
                          maxWidth: `${logoWidth}px`,
                          maxHeight: '100%',
                        }}
                        priority={true}
                      />
                    </Link>
                  </div>
                </div>
                {secondHalfLinks.map(({ link, linkName }) => (
                  <NavLink
                    key={link}
                    link={link}
                    linkName={linkName}
                    isActive={isActiveLink(link)}
                  />
                ))}
                <div className={`${showButton ? 'block' : 'hidden'}`}>
                  <ButtonLink
                    buttonText="Book Now"
                    buttonLink="https://thefunbug.as.me/"
                    buttonClass="bg-soft-blue hover:bg-worm-blue"
                    external={true}
                  />
                </div>
              </div>
            </nav>
          ))}
      </div>
      <div
        className="w-full h-[40px] bg-repeat-x bg-[length:auto_20px]"
        style={{
          backgroundImage: `url(${navBorder.src})`,
        }}
      ></div>
    </header>
  );
}
