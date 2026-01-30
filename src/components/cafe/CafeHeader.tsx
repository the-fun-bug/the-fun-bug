'use client';

import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import PhotoCarousel from '../home/PhotoCarousel';
import { Photo } from '@/types/types';

export default function CaféHeader({ images }: { images: Photo[] }) {
  const isMobile = useIsMobile(768);

  const scrollToDirtySodasMenu = () => {
    const scrollSection = document.querySelector('#dirty-sodas');
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
    <section className="flex flex-col-reverse lg:flex-row gap-6 pt-[1rem] px-[1rem] lg:items-center">
      <div className="lg:w-[55%] bg-gray-200">
        <PhotoCarousel images={images} fit="cover" />
      </div>
      <div className="lg:w-[45%] flex flex-col gap-4 text-center lg:text-left">
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
          onClick={scrollToDirtySodasMenu}
          className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-cafe/50 hover:bg-cafe`}
        >
          Check Out Our New Dirty Sodas Menu
        </button>
      </div>
    </section>
  );
}
