import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import bulletImg from './img/bullet.png';
import { Hours, PartyPageData } from '@/types/types';

export default function PartyPackage({
  hours,
  partyData,
}: {
  hours: Hours;
  partyData: PartyPageData;
}) {
  return (
    <section className="flex justify-center items-center py-[3rem] px-[1rem]">
      <div className="flex flex-col gap-[1.25rem] justify-center items-center text-center w-full max-w-[1200px]">
        <h2 className="font-nickainley pb-[1rem]">The Fun Bug Party Package</h2>
        <div className="flex gap-[1.25rem] pb-[1rem]">
          <p className="text-[1.5rem]">2-Hour Event</p>
          <p className="text-[1.5rem] ]">{partyData.partyPricing}*</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-[1.25rem] justify-between text-left">
          <div className="flex flex-col gap-[1.25rem] w-full md:w-[45%]">
            <h3>What&apos;s Included</h3>
            <div className="flex flex-col gap-[1.25rem]">
              {partyData.partyBullets.map((r, i) => (
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
                  <p>{r.bullet}</p>
                </div>
              ))}
              <p className="md:max-w-[490px] pl-[42px]">
                *An {partyData.tax} sales tax on the total party amount will be
                due on the day of your event.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1.25rem] w-full md:w-[45%]">
            <h3>Event Hours</h3>
            <div className="flex flex-col gap-[1.5rem] pb-[1rem]">
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Friday</p>
                <p className="w-[308px]">{hours.partyHours.friday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Saturday</p>
                <p className="w-[308px]">{hours.partyHours.saturday}</p>
              </div>
              <div className="flex gap-[1.25rem]">
                <p className="w-[88.5px]">Sunday</p>
                <p className="w-[308px]">{hours.partyHours.sunday}</p>
              </div>
            </div>
            <div className="w-full md:max-w-[400px] flex">
              <ButtonLink
                buttonText="View Available Party Times"
                buttonLink="https://thefunbug.as.me/book-party"
                buttonClass="bg-soft-pink hover:bg-worm-pink"
                excludeMargin={true}
                external={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
