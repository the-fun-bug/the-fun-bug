import React from 'react';
import Image from 'next/image';
import ButtonLink from '../common/ButtonLink';
import coffeeImg from './img/cafe-header-2.png';

export default function CafeHeader() {
  return (
    <section className="flex justify-center items-center py-[3rem] md:px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1rem] w-full max-w-[650px]">
        <h1 className="font-nickainley">The Fun Bug Cafe</h1>
        <p>
          Enjoy your favorite beverage while you’re little bugs play! Check back
          for our seasonal specialties.
        </p>
        <ButtonLink
          buttonText="View Seasonal Menu"
          buttonLink="#seasonal"
          buttonClass="bg-cafe/50 hover:bg-cafe"
        />
        <Image
          priority={true}
          src={coffeeImg}
          alt="Four cups of beverages that can be found in the cafe"
          width={1140}
          height={366}
          className="w-full"
        />
      </div>
    </section>
  );
}
