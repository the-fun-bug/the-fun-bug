'use client';

import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';
import { AdmissionsPricing } from './PricingPage';

export default function OpenPlayAdmissions({
  admissionsPricing,
}: {
  admissionsPricing: AdmissionsPricing;
}) {
  const bullets = [
    'Admission is good for a 2 hour reservation.',
    'You may bring in food and beverages.',
    'Snack & drink menu will be available for purchase from the café.',
  ];
  return (
    <section className={`flex items-center justify-center py-[3rem] px-[1rem]`}>
      <div className={`flex flex-col gap-[1.25rem] w-full max-w-[1200px]`}>
        <h2 className="font-nickainley pb-[1rem] text-center">
          Open Play Admission
        </h2>
        <div className="flex flex-col lg:flex-row gap-[1.25rem] justify-between w-full">
          <div className="flex flex-col gap-[1.25rem] lg:w-[50%] lg:items-center lg:justify-center lg:pb-[88px]">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex justify-between items-center mx-auto lg:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] lg:text-[1.5rem]">Ages 0-2</p>
                <p className="text-[1rem] lg:text-[1.5rem]">
                  ${admissionsPricing.young}/child
                </p>
              </div>
              <div className="flex justify-between items-center mx-auto lg:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] lg:text-[1.5rem]">Ages 3-12</p>
                <p className="text-[1rem] lg:text-[1.5rem]">
                  ${admissionsPricing.older}/child
                </p>
              </div>
            </div>
            {/* <AdmissionsButtons /> */}
          </div>
          <ul className="grid grid-cols-1 gap-[1rem]">
            {bullets.map((r, i) => (
              <li key={i} className="flex gap-[0.5rem] items-center">
                <Image
                  src={bulletImg}
                  alt="lady bug bullet"
                  height={42}
                  width={42}
                  className="self-start"
                  loading="lazy"
                />
                <p className="lg:max-w-[460px]">{r}</p>
              </li>
            ))}
            <p className="pt-[1rem] pl-[42px] lg:max-w-[460px] italic">
              * Socks must be worn on the play turf and structures at all times
              by children and adults. If needed, socks are available for
              purchase for $3.
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

// function AdmissionsButtons() {
//   const scrollToFaqs = () => {
//     const contactSection = document.querySelector('#faqs');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToRulesOfPlay = () => {
//     const contactSection = document.querySelector('#rules-of-play');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="flex flex-col xs:flex-row items-center flex-wrap justify-center xs:gap-x-[2rem]">
//       <button
//         onClick={scrollToFaqs}
//         className={`w-fit font-medium border border-black rounded-md px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-yellow/50 hover:bg-soft-yellow`}
//       >
//         FAQs
//       </button>
//       <button
//         onClick={scrollToRulesOfPlay}
//         className={`w-fit font-medium border border-black rounded-md px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-orange/50 hover:bg-soft-orange`}
//       >
//         Rules of Play
//       </button>
//     </div>
//   );
// }
