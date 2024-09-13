import React from 'react';
import Image from 'next/image';
import headerImg from './img/pricing-header.png';
import headerImgMobile from './img/pricing-header-mobile.png';

export default function PricingHeader() {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] md:px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley">Play Studio Pricing</h1>
        <p className="max-w-[750px]">
          Come join us at our play studio where you’ll find a fun, aesthetic,
          and clean place for both kids and parents to enjoy!
        </p>
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
