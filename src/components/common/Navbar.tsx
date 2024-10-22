// src/components/Navbar.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import navLogo from './img/logo-nav.png';
import navBorder from './img/nav-border.png';
import useIsMobile from '@/hooks/useIsMobile';
import ButtonLink from './ButtonLink';
import Banner from './Banner';

export default function Navbar({ bannerText }: { bannerText: string }) {
  const hasBanner = bannerText.trim() !== '';
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerHeight, setBannerHeight] = useState(82);
  const [logoSize, setLogoSize] = useState(245); // Default logo size
  const [navSize, setNavSize] = useState(250);
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(''); // Track the current path

  useEffect(() => {
    if (hasBanner && bannerRef.current) {
      const height = bannerRef.current.offsetHeight;
      setBannerHeight(height); // Update state after the banner is rendered
    }
  }, [hasBanner]); // Recalculate height only when hasBanner changes

  useEffect(() => {
    // Adjust scroll-padding-top based on the banner's actual height
    if (hasBanner) {
      document.documentElement.style.scrollPaddingTop = `${bannerHeight + 82}px`;
    }

    // Clean up by resetting to default
    return () => {
      document.documentElement.style.scrollPaddingTop = '82px';
    };
  }, [bannerHeight, hasBanner]);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts

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
        setLogoSize(125); // Shrink logo size when scrolling
        setNavSize(130);
      } else {
        setLogoSize(245); // Restore original size at top
        setNavSize(250);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (link: string) => {
    return currentPath === link;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {hasBanner && <Banner ref={bannerRef} text={bannerText} />}
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
                      style={{ maxWidth: `${logoSize}px`, maxHeight: '100%' }}
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
      <div
        className="w-full h-[40px] bg-repeat-x bg-[length:auto_20px]"
        style={{
          backgroundImage: `url(${navBorder.src})`,
        }}
      ></div>
    </header>
  );
}
