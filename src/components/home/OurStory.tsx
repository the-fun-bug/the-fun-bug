import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import bugsImg from './img/our-story.png';

export default function OurStory() {
  return (
    <section className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="max-w-[1200px] text-center flex flex-col gap-[1.25rem] justify-center items-center">
        <h2 className="font-nickainley pb-[1rem]">
          An Indoor Playground in New Braunfels
        </h2>
        <p className="max-w-[700px]">
          Inspired by our own kids, we built a space where families can enjoy
          safe, active play and parents can relax with a great coffee in hand.
          From open play sessions to private party rentals, The Fun Bug is where
          fun and connection come together.
        </p>
        <ButtonLink
          buttonText="Our Story"
          buttonLink="/about"
          buttonClass="bg-transparent hover:bg-gradient-to-r hover:from-soft-pink hover:to-soft-blue"
        />
      </div>
      <Image
        src={bugsImg}
        alt="The Fun Bug's little bugs"
        className="max-w-[1000px] w-full"
        height={362}
        width={2090}
        placeholder="blur"
      />
    </section>
  );
}
