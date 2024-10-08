'use client';

import React from 'react';
import Image from 'next/image';
import balloonsImg from './img/hours-balloons.png';

export default function PartyHours() {
  const scrollToCheckAvailability = () => {
    const contactSection = document.querySelector('#reserve');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex justify-center items-center py-[3rem] px-[1rem]">
      <div className="flex justify-center md:justify-between items-center text-center gap-[1.25rem] w-full max-w-[1000px]">
        <div className="w-full md:w-[50%] flex flex-col gap-[1.25rem]">
          <h1 className="font-nickainley">Private Event Hours</h1>
          <div className="flex flex-col gap-[1.25rem]">
            <button
              onClick={scrollToCheckAvailability}
              className={`self-center w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-pink/50 hover:bg-soft-pink`}
            >
              Check Availability
            </button>
            <div className="w-full flex justify-evenly items-center md:justify-center gap-[1.25rem]">
              <div className="flex flex-col gap-[1.25rem] text-left">
                <div className="flex gap-[1.25rem]">
                  <p className="w-[88.5px]">Friday</p>
                  <p className="w-[120px] sm:w-[162px]">
                    3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm
                  </p>
                </div>
                <div className="flex gap-[1.25rem]">
                  <p className="w-[88.5px]">Saturday</p>
                  <p className="w-[120px] sm:w-[162px]">
                    3:00 pm - 5:00 pm & 6:00 pm - 8:00 pm
                  </p>
                </div>
                <div className="flex gap-[1.25rem]">
                  <p className="w-[88.5px]">Sunday</p>
                  <p className="w-[120px] sm:w-[162px]">
                    11:00 am - 1:00 pm, 2:00 pm - 4:00 pm & 5:00 pm - 7:00 pm
                  </p>
                </div>
              </div>
              <Image
                src={balloonsImg}
                alt="assortment of balloons tied in a bundle"
                height={828}
                width={462}
                className="hidden sm:block md:hidden w-full max-w-[150px]"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center">
          <Image
            src={balloonsImg}
            alt="assortment of balloons tied in a bundle"
            height={828}
            width={462}
            className="hidden md:block w-full max-w-[230px]"
          />
        </div>
      </div>
    </section>
  );
}
