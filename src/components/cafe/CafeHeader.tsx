'use client';

import React from 'react';
import Image from 'next/image';
import coffeeImg from './img/cafe-header-3.png';
import useIsMobile from '@/hooks/useIsMobile';

export default function CaféHeader() {
  const isMobile = useIsMobile(768);

  const scrollToSeasonalMenu = () => {
    const scrollSection = document.querySelector('#seasonal');
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Use this function for buttons that scroll from the top of the page
    // This offsets the extra padding from the large header on large screens
    if (scrollSection && !isMobile) {
      const yOffset = -225;
      const y =
        scrollSection.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[750px]">
        <h1 className="font-nickainley">The Fun Bug Café</h1>
        <p>
          Enjoy your favorite beverage while your little bugs play! The Fun Bug
          Café offers delicious coffee, tasty treats, and a cozy space for
          parents to relax while kids explore the playground.
        </p>
        <p>
          For the safety and comfort of our youngest guests, café items are
          available to-go for visitors without children. Indoor seating around
          the play area is reserved for families enjoying our play space.
        </p>
        <button
          onClick={scrollToSeasonalMenu}
          className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-cafe/50 hover:bg-cafe`}
        >
          Seasonal Menu
        </button>

        <Image
          priority={true}
          src={coffeeImg}
          alt="Four cups of beverages that can be found in the cafe"
          width={1100}
          height={460}
          className="w-full max-w-[550px]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
