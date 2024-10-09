'use client';

import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function PartyPackage() {
  const bullets = [
    'The venue will be exclusively yours, closed to the public for 2 hours.',
    'You may bring in food and beverages.',
    'Regular snack & drink menu will be available for purchase.',
    '30 minute set up time prior to the start of the party.',
  ];

  const scrollToReservation = () => {
    const scrollSection = document.querySelector('#reserve');
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex justify-center items-center py-[3rem] px-[1rem]">
      <div className="flex flex-col gap-[1.25rem] justify-center items-center text-center w-full max-w-[1200px]">
        <h1 className="font-nickainley pb-[1rem]">The Fun Bug Party Package</h1>
        <div className="flex gap-[1.25rem] pb-[1rem]">
          <p className="text-[1.5rem]">2 Hour Event</p>
          <p className="text-[1.5rem] ]">$375</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-[1.25rem] justify-between text-left">
          <div className="flex flex-col gap-[1.25rem] w-full md:w-[45%]">
            <h2>What&apos;s Included</h2>
            <div className="flex flex-col gap-[1.25rem]">
              {bullets.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-[0.5rem] md:max-w-[490px] items-center"
                >
                  <Image
                    src={bulletImg}
                    alt="lady bug bullet"
                    height={42}
                    width={42}
                    className="self-start"
                  />
                  <p>{r}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[1.25rem] w-full md:w-[45%]">
            <h2>Event Hours</h2>
            <div className="flex flex-col gap-[1.5rem] pb-[1rem]">
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Friday</p>
                <p className="w-[308px]">
                  3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm
                </p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Saturday</p>
                <p className="w-[308px]">
                  3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm
                </p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Sunday</p>
                <p className="w-[308px]">
                  11:00 am - 1:00 pm, 2:00 pm - 4:00 pm & 5:00 pm - 7:00 pm
                </p>
              </div>
            </div>
            <div className="w-full md:max-w-[400px] flex justify-center">
              <button
                onClick={scrollToReservation}
                className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-pink/50 hover:bg-soft-pink`}
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
