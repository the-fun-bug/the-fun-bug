'use client';

import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';
import partiesHeaderImg from './img/parties-header.png';

export default function PartiesHeader() {
  const isMobile = useIsMobile(768);

  const scrollToReservation = () => {
    const scrollSection = document.querySelector('#reserve');
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
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[750px]">
        <h1 className="font-nickainley pb-[1rem]">Private Events & Parties</h1>
        <p>
          Are you ready to party? We are! Here at The Fun Bug, we think every
          day should be a party. Schedule your event today!
        </p>

        <button
          onClick={scrollToReservation}
          className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-pink/50 hover:bg-soft-pink`}
        >
          Reserve Now
        </button>
        <Image
          priority={true}
          src={partiesHeaderImg}
          alt="Four cups of beverages that can be found in the cafe"
          width={632}
          height={432}
          className="w-full max-w-[450px]"
        />
      </div>
    </section>
  );
}
