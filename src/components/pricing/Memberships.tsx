'use client';

import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';
import { MembershipPricing } from './PricingPage';

export default function Memberships({
  membershipPricing,
}: {
  membershipPricing: MembershipPricing;
}) {
  const bullets = [
    'There are no fees and no contract',
    'Memberships are active for the month of purchase',
    'Payments for memberships can be purchased in-store and drafted on the 1st of each month',
    'Memberships include 1 reservation per day for each child',
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
                <p className="text-[1rem] md:text-[1.5rem]">
                  ${membershipPricing.one}/month
                </p>
              </div>
              <div className="flex justify-between items-center mx-auto md:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] md:text-[1.5rem]">2 Children</p>
                <p className="text-[1rem] md:text-[1.5rem]">
                  ${membershipPricing.two}/month
                </p>
              </div>
              <div className="flex justify-between items-center mx-auto md:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] md:text-[1.5rem]">3+ Children</p>
                <p className="text-[1rem] md:text-[1.5rem]">
                  ${membershipPricing.three}/month
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            {bullets.map((r, i) => (
              <div key={i} className="flex gap-[0.5rem] items-center">
                <Image
                  src={bulletImg}
                  alt="lady bug bullet"
                  height={42}
                  width={42}
                  className="self-start"
                />
                <p className="lg:max-w-[460px]">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
