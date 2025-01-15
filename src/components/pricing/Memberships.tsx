'use client';

import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function Memberships() {
  const bullets = [
    'There are no fees and no contract',
    'Memberships are active for the month of purchase',
    'Payments for memberships can be purchased in-store and drafted on the 1st of each month',
  ];
  return (
    <section className={`flex items-center justify-center py-[3rem] px-[1rem]`}>
      <div className={`flex flex-col gap-[1.25rem] w-full max-w-[1200px]`}>
        <h1 className="font-nickainley pb-[1rem] text-center">Memberships</h1>
        <div className="flex flex-col md:flex-row gap-[1.25rem] justify-between w-full">
          <div className="flex flex-col gap-[1.25rem] md:w-[50%] md:items-center md:justify-center">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex justify-between items-center mx-auto md:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] md:text-[1.5rem]">1 Child</p>
                <p className="text-[1rem] md:text-[1.5rem]">$45/month</p>
              </div>
              <div className="flex justify-between items-center mx-auto md:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] md:text-[1.5rem]">2 Children</p>
                <p className="text-[1rem] md:text-[1.5rem]">$85/month</p>
              </div>
              <div className="flex justify-between items-center mx-auto md:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] md:text-[1.5rem]">3+ Children</p>
                <p className="text-[1rem] md:text-[1.5rem]">$120/month</p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
