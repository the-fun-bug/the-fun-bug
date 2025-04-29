import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import headerImg from './img/pricing-header.png';
import headerImgMobile from './img/pricing-header-mobile.png';

export default function PricingHeader() {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley pb-[1rem] max-w-[640px]">
          Indoor Playground Pricing & Reservations
        </h1>
        <p className="max-w-[700px]">
          Plan your next adventure at The Fun Bug! Our indoor playground offers
          a fun, stylish, and clean space for kids to explore while parents
          relax. Walk-ins are welcome when space allows, but reservations are
          recommended to guarantee your spot for open play.
        </p>
        <ButtonLink
          buttonText="Reserve Play Time"
          buttonLink="https://thefunbug.as.me/play-studio-reservations"
          buttonClass="bg-soft-blue hover:bg-worm-blue"
          external={true}
          excludeMargin={true}
        />
        <Image
          priority={true}
          src={headerImg}
          alt="The Fun Bug's little bugs playing in the play studio"
          width={2524}
          height={618}
          className="hidden md:block w-full max-w-[1000px]"
        />
        <Image
          priority={true}
          src={headerImgMobile}
          alt="The Fun Bug's little bugs playing in the play studio"
          width={1020}
          height={474}
          className="md:hidden w-full max-w-[300px]"
        />
      </div>
    </section>
  );
}
