'use client';

import React from 'react';
import Image from 'next/image';
import partiesHeaderImg from './img/parties-header.png';

export default function PartiesHeader() {
  const scrollToReservation = () => {
    const contactSection = document.querySelector('#reserve');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex justify-center items-center py-[3rem] md:px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1rem] w-full max-w-[650px]">
        <h1 className="font-nickainley">Private Events & Parties</h1>
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
          className="w-full max-w-[350px]"
        />
      </div>
    </section>
  );
}
