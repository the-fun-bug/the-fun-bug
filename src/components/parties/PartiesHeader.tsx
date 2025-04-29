import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import partiesHeaderImg from './img/parties-header.png';

export default function PartiesHeader() {
  return (
    <section className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[750px]">
        <h1 className="font-nickainley pb-[1rem]">Private Events & Parties</h1>
        <p>
          Every day should be a party — and at The Fun Bug, it can be! Ready to
          celebrate? Book your private event today, or scroll down to see what’s
          included in your party package and how you can customize your day!
        </p>

        <ButtonLink
          buttonText="Book Your Party"
          buttonLink="https://thefunbug.as.me/book-party"
          buttonClass="bg-soft-pink hover:bg-worm-pink"
          excludeMargin={true}
          external={true}
        />
        <Image
          priority={true}
          src={partiesHeaderImg}
          alt="Four cups of beverages that can be found in the cafe"
          width={632}
          height={432}
          className="w-full max-w-[450px]"
        />
      </div>
    </section>
  );
}
