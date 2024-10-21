'use client';

import React from 'react';
import Image from 'next/image';
import coffeeImg from './img/cafe-header-2.png';
import useIsMobile from '@/hooks/useIsMobile';

export default function CafeHeader() {
  const isMobile = useIsMobile(768);

  const scrollToSeasonalMenu = () => {
    const scrollSection = document.querySelector('#seasonal');
    console.log(scrollSection);
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
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] md:px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1rem] w-full max-w-[650px]">
        <h1 className="font-nickainley">The Fun Bug Cafe</h1>
        <p>
          Enjoy your favorite beverage while you’re little bugs play! Check back
          for our seasonal specialties.
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
          width={1140}
          height={366}
          className="w-full"
        />
      </div>
    </section>
  );
}
