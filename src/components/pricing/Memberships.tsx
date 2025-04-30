'use client';

import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import bulletImg from './img/bullet.png';
import { MembershipPricing } from './PricingPage';

export default function Memberships({
  membershipPricing,
}: {
  membershipPricing: MembershipPricing;
}) {
  const bullets = [
    'No fees, no contracts—cancel anytime.',
    'Memberships are valid for the month of purchase.',
    'Enjoy one play session per day, per child with your membership.',
    'After purchasing a membership, you’ll receive a coupon code to use when reserving play sessions — so you won’t pay at checkout every time.',
  ];
  return (
    <section className={`flex items-center justify-center py-[3rem] px-[1rem]`}>
      <div className={`flex flex-col gap-[1.25rem] w-full max-w-[1200px]`}>
        <h2 className="font-nickainley pb-[1rem] text-center">Memberships</h2>
        <div className="flex flex-col lg:flex-row gap-[1.25rem] justify-between w-full">
          <div className="flex flex-col gap-[1.25rem] lg:w-[50%] items-center lg:justify-center">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex justify-between items-center mx-auto lg:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] lg:text-[1.5rem]">1 Child</p>
                <p className="text-[1rem] lg:text-[1.5rem]">
                  ${membershipPricing.one}/month
                </p>
              </div>
              <div className="flex justify-between items-center mx-auto lg:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] lg:text-[1.5rem]">2 Children</p>
                <p className="text-[1rem] lg:text-[1.5rem]">
                  ${membershipPricing.two}/month
                </p>
              </div>
              <div className="flex justify-between items-center mx-auto lg:mx-0 gap-[2.5rem]">
                <p className="text-[1rem] lg:text-[1.5rem]">3+ Children</p>
                <p className="text-[1rem] lg:text-[1.5rem]">
                  ${membershipPricing.three}/month
                </p>
              </div>
            </div>
            <ButtonLink
              buttonText="Buy Membership"
              buttonLink="https://app.acuityscheduling.com/catalog.php?owner=33135518"
              buttonClass="bg-soft-blue hover:bg-worm-blue"
              external={true}
              excludeMargin={true}
            />
          </div>
          <ul className="grid grid-cols-1 gap-[1rem]">
            {bullets.map((r, i) => (
              <li key={i} className="flex gap-[0.75rem] items-center">
                <Image
                  src={bulletImg}
                  alt="lady bug bullet"
                  height={42}
                  width={42}
                  className="self-start"
                />
                <p className="lg:max-w-[460px]">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
