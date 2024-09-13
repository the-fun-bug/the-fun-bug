import React from 'react';
import Image from 'next/image';
import bannerImg from './img/banner-2.png';
import pinkPlayHouse from './img/play-house.png';

export default function PartyPackage() {
  return (
    <section className="flex justify-center items-center py-[3rem] md:px-[1rem]">
      <div className="flex flex-col lg:flex-row gap-[1rem] justify-between items-center text-center w-full max-w-[900px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-nickainley max-w-[300px] md:max-w-[425px] pb-0">
            The Fun Bug Party Package
          </h1>
          <p className="text-[1.5rem] pt-[1rem]">$375</p>
          <Image
            src={bannerImg}
            alt="party banner"
            height={302}
            width={806}
            className="w-full max-w-[403px] hidden lg:block"
          />
        </div>
        <div>
          <div className="relative">
            <Image
              src={pinkPlayHouse}
              alt="pink play house"
              width={920}
              height={854}
              className="max-w-[460px] w-full"
            />
            <div className="absolute top-0 left-0 pt-[83px] xs:pt-[120px] px-[1.5rem] sm:px-[2.5rem] flex flex-col justify-center items-center gap-[0.5rem] sm:gap-[1rem] max-w-[460px] w-full">
              <h2>What’s included:</h2>
              <ul className="flex flex-col gap-[0.25rem] lg:gap-[1rem] text-left list-disc pl-[1rem]">
                <li>
                  The venue will be exclusively yours, closed to the public for
                  2 hours.
                </li>
                <li>You may bring in food and beverages.</li>
                <li>
                  Regular snack & drink menu will be available for purchase.
                </li>
                <li>30 minute set up time prior to the start of the party.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
