import React from 'react';
import Image from 'next/image';
import openPlayBg from './img/open-play.png';
import partiesBg from './img/parties.png';
import ButtonLink from '../common/ButtonLink';

export default function HowWePlay() {
  return (
    <section className="py-[2rem] flex flex-col justify-center items-center p-[1rem]">
      <div className="text-center flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-nickainley">This Is How We Play</h1>
        <div className="flex flex-col lg:flex-row w-full gap-[2rem]">
          <div className="relative">
            <Image
              src={openPlayBg}
              alt="blue play house"
              width={920}
              height={854}
              className="max-w-[460px] w-full"
            />
            <div className="absolute top-0 left-0 pt-[100px] xs:pt-[120px] px-[2.25rem] sm:px-[2.5rem] flex flex-col justify-center items-center gap-[0.5rem] sm:gap-[1rem] max-w-[460px] w-full">
              <h2 className="font-bold text-xl">Open Play</h2>
              <p className="hidden xs:block">
                Kids will have a blast on our large custom-built wooden play
                structure, climb on our soft play mats, and explore their
                creativity with endless play opportunities *
              </p>
              <p>$12 per child ages 2-12</p>
              <p>$8 per child 0-2</p>
              <ButtonLink
                buttonText="Learn More"
                buttonLink="/pricing"
                buttonClass="bg-transparent hover:bg-dark-blue hover:text-white"
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src={partiesBg}
              alt="pink play house"
              width={920}
              height={854}
              className="max-w-[460px] w-full"
            />
            <div className="absolute top-0 left-0 pt-[100px] xs:pt-[120px] px-[2.25rem] sm:px-[2.5rem] flex flex-col justify-center items-center gap-[0.5rem] sm:gap-[1rem] max-w-[460px] w-full">
              <h2 className="font-bold text-xl">Parties & Events</h2>
              <p className="hidden xs:block">
                Book your party with us and enjoy full, private access to our
                facility. The venue will be exclusively yours, closed to the
                public. Regular snack & drink menu will be available *
              </p>
              <p>$375 for 2 hours</p>
              <p>$75 for additional 30 minutes</p>
              <ButtonLink
                buttonText="Learn More"
                buttonLink="/parties"
                buttonClass="bg-transparent hover:bg-dark-pink hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}