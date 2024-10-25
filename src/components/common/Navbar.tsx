'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Use the new `usePathname` hook instead
import navLogo from './img/logo-nav.png';
import navBorder from './img/nav-border.png';
import useIsMobile from '@/hooks/useIsMobile';
import ButtonLink from './ButtonLink';
import Banner from './Banner';

export default function Navbar({ bannerText }: { bannerText: string }) {
  const hasBanner = bannerText.trim() !== '';
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerHeight, setBannerHeight] = useState(82);
  const [logoWidth, setLogoWidth] = useState(245); // Default logo size
  const [navHeight, setNavHeight] = useState(0); //Default nav height
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile(1024);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Track the current path using the `usePathname` hook

  const navLinks = [
    {
      link: '/about',
      linkName: 'About',
    },
    {
      link: '/pricing',
      linkName: 'Pricing',
    },
    {
      link: '/parties',
      linkName: 'Parties',
    },
    {
      link: '/cafe',
      linkName: 'Cafe',
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
    if (hasBanner && bannerRef.current) {
      const height = bannerRef.current.offsetHeight;
      setBannerHeight(height); // Update state after the banner is rendered
    }
  }, [hasBanner]); // Recalculate height only when hasBanner changes

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  useEffect(() => {
    if (hasBanner) {
      document.documentElement.style.scrollPaddingTop = `${bannerHeight + 82}px`;
    }

    return () => {
      document.documentElement.style.scrollPaddingTop = '82px';
    };
  }, [bannerHeight, hasBanner]);

  // Close the mobile menu when the route changes
  useEffect(() => {
    if (navOpen) {
      setNavOpen(false);
    }
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
      } else {
        setLogoWidth(245); // Restore original size at top
        setNavHeight(186.5);
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
      {hasBanner && <Banner ref={bannerRef} text={bannerText} />}
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
            <nav className="bg-white p-[0.5rem] flex justify-between">
              <Link href="/">
                <Image
                  src={navLogo}
                  alt="The Fun Bug, Play Studio & Parties Logo"
                  className="w-[100px]"
                  priority={true}
                  height={341}
                  width={485}
                  sizes="100px"
                  placeholder="blur"
                />
              </Link>
              <div className="flex gap-[2rem] items-center">
                <div className="h-[56px] flex items-center">
                  <ButtonLink
                    buttonText="Book a Party"
                    buttonLink="/parties"
                    buttonClass="hidden xxs:block bg-soft-pink/50 hover:bg-soft-pink"
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
                <div
                  className="fixed left-0 h-screen w-screen bg-white"
                  style={{
                    top: hasBanner ? `${bannerHeight + 82}px` : '82px',
                  }}
                >
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
              className={`bg-white w-full flex items-center justify-between mx-auto py-[0.5rem] md:px-[1rem]`}
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
                        placeholder="blur"
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
