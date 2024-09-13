'use client';

import React from 'react';
import Image from 'next/image';
import aboutImage from './img/about.png';

export default function HiEveryone() {
  const scrollToFaqs = () => {
    const contactSection = document.querySelector('#faqs');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRulesOfPlay = () => {
    const contactSection = document.querySelector('#rules-of-play');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex justify-center items-center py-[1.5rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1000px]">
        <Image
          src={aboutImage}
          priority={true}
          alt="The Saur Family"
          height={401}
          width={705}
          className="rounded-lg"
        />
        <div className="py-[2rem] flex flex-col gap-[1rem] text-center max-w-[750px]">
          <h1 className="font-nickainley">Hi everyone!</h1>
          <p>
            We are the Saur&apos;s. I am Kameron and my husband is Clay, or as
            my sweet in-laws like to call it, the &lsquo;vision&lsquo; and the
            &lsquo;labor&lsquo;. We have two amazing kiddos and we are big on
            nicknames around here! Our daughter Olivia is our Bug! And our son
            Levi is our worm! Thus, The Fun Bug was born.
          </p>
          <p>
            As a mama of two small gremlins, I noticed a lack in the amount of
            indoor play opportunities here in New Braunfels, and decided to take
            matters into my own hands. We want the Fun Bug to be a fun, clean,
            safe, and aesthetic place for both kiddos and parents to enjoy.
            Whether that is playing on our large custom built wooden play
            structure, climbing on our soft play mats, or exploring creativity
            through our endless play opportunities, we know there is something
            for everyone.
          </p>
          <p>
            During open hours, we will have a delicious drinks, comfortable
            lounging, free wifi, and plenty of work space. Oh, and did I mention
            we are a party rental space after hours?! Host your event with full
            access to our entire facility, reserved just for your party—closed
            to the public for the ultimate private experience.
          </p>
          <p>
            We are so very excited for all that is to come and cannot wait to
            meet each and everyone of you!
          </p>
          <div className="flex flex-col xs:flex-row items-center flex-wrap justify-center xs:gap-[2rem]">
            <button
              onClick={scrollToFaqs}
              className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-yellow/50 hover:bg-soft-yellow`}
            >
              FAQs
            </button>
            <button
              onClick={scrollToRulesOfPlay}
              className={`w-fit font-medium border border-black rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 bg-soft-orange/50 hover:bg-soft-orange`}
            >
              Rules of Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
