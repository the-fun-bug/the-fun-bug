import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bugsImg from './img/our-story.png';

export default function OurStory() {
  return (
    <section className="py-[2rem] flex flex-col justify-center items-center p-[1rem]">
      <div className="max-w-[750px] text-center flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-nickainley">A Place For Everyone To Enjoy</h1>
        <p>
          Welcome to The Fun Bug, where playtime meets relaxation for both kids
          and parents! Inspired by our own children, we saw a need for more
          indoor play options in New Braunfels. Come join us for open play time,
          delicious coffee, and exclusive party rentals after hours!
        </p>
        <Link
          href={'/about'}
          className="font-medium border border-black hover:border-transparent rounded-lg px-[2rem] py-[0.5rem] my-[1rem] 
             transition-colors duration-300 bg-transparent hover:bg-gradient-to-r hover:from-[#B9DEFF] hover:to-[#FFC5E5]"
        >
          Our Story
        </Link>
      </div>
      <Image
        src={bugsImg}
        alt="The Fun Bug's little bugs"
        className="max-w-[1045px] w-full"
        height={362}
        width={2090}
      />
    </section>
  );
}
