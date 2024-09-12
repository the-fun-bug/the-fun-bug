import React from 'react';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import bugsImg from './img/our-story.png';

export default function OurStory() {
  return (
    <section className="pt-[1rem] pb-[1.5rem] flex flex-col justify-center items-center p-[1rem]">
      <div className="max-w-[750px] text-center flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-nickainley">A Place For Everyone To Enjoy</h1>
        <p>
          Welcome to The Fun Bug, where playtime meets relaxation for both kids
          and parents! Inspired by our own children, we saw a need for more
          indoor play options in New Braunfels. Come join us for open play time,
          delicious coffee, and exclusive party rentals after hours!
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
        className="max-w-[750px] w-full"
        height={362}
        width={2090}
      />
    </section>
  );
}
