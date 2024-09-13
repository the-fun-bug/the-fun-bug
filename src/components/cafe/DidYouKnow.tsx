import React from 'react';
import Image from 'next/image';
import ButtonLink from '../common/ButtonLink';
import raindowImg from './img/rainbow.png';

export default function DidYouKnow() {
  return (
    <section
      className={`flex items-center justify-center pt-[1.5rem] md:px-[1rem]`}
    >
      <div
        className={`flex gap-[1rem] lg:gap-[2rem] flex-row items-center justify-between w-full max-w-[1000px]`}
      >
        <div className="flex flex-col gap-[1rem] max-w-[750px] lg:max-w-[490px]">
          <h1 className="font-nickainley">Did You Know?</h1>
          <p className="max-w-[490px]">
            Our full menu is available for all private events! Reserve your spot
            now and don’t miss out on all the fun. Book Private Event
          </p>
          <ButtonLink
            buttonText="Book Private Event"
            buttonLink="/parties"
            buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
          />
        </div>
        <Image
          src={raindowImg}
          alt="rainbow"
          className="hidden sm:block self-end w-full max-w-[250px] lg:max-w-[500px]"
        />
      </div>
    </section>
  );
}
