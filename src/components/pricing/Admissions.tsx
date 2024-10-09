'use client';

import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function OpenPlayAdmissions() {
  const bullets = [
    'Admission is good for the entire day. Families are welcome to leave and re-enter the same day! *',
    'You may bring in food and beverages.',
    'Snack & drink menu will be available for purchase.',
  ];
  return (
    <section className={`flex items-center justify-center py-[3rem] px-[1rem]`}>
      <div className={`flex flex-col gap-[1.25rem] w-full max-w-[1200px]`}>
        <h1 className="font-nickainley pb-[1rem] text-center">
          Open Play Admission
        </h1>
        <div className="flex flex-col md:flex-row gap-[1.25rem] justify-between w-full">
          <div className="flex flex-col gap-[1.25rem] md:w-[50%] md:items-center md:justify-center">
            <div>
              <div className="flex justify-between w-[205px] items-center mx-auto md:mx-0">
                <p>Ages 0-2</p>
                <p>$8/child</p>
              </div>
              <div className="flex justify-between w-[205px] items-center mx-auto md:mx-0">
                <p>Ages 3-12</p>
                <p>$12/child</p>
              </div>
            </div>
            <AdmissionsButtons />
          </div>
          <div className="grid grid-cols-1 gap-[1.25rem]">
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
            <p className="pt-[1rem] pl-[42px]">
              * Socks must be worn on the play turf and structures at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionsButtons() {
  const scrollToFaqs = () => {
    const contactSection = document.querySelector('#faqs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRulesOfPlay = () => {
    const contactSection = document.querySelector('#rules-of-play');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col xs:flex-row items-center flex-wrap justify-center xs:gap-x-[2rem]">
      <button
        onClick={scrollToFaqs}
        className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-yellow/50 hover:bg-soft-yellow`}
      >
        FAQs
      </button>
      <button
        onClick={scrollToRulesOfPlay}
        className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-orange/50 hover:bg-soft-orange`}
      >
        Rules of Play
      </button>
    </div>
  );
}
