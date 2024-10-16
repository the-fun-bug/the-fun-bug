import React from 'react';
import Image from 'next/image';
import openPlayBg from './img/open-play.png';
import partiesBg from './img/parties.png';
import ButtonLink from '../common/ButtonLink';

export default function HowWePlay() {
  return (
    <section className="py-[3rem] flex flex-col justify-center items-center px-[1rem]">
      <div className="w-full max-w-[1200px] text-center flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-nickainley pb-[2rem]">This Is How We Play</h1>
        <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-[3rem]">
          <div className="relative w-fit">
            <Image
              src={openPlayBg}
              alt="blue play house"
              width={920}
              height={854}
              className="max-w-[460px] w-full"
            />
            <div className="absolute top-0 left-0 pt-[90px] xxs:pt-[120px] px-[2.25rem] xs:px-[3rem] flex flex-col justify-center items-center gap-[1rem] xs:gap-[1.75rem] max-w-[460px] w-full">
              <h2 className="xs:mt-[1rem]">Play Studio</h2>
              <p className="">
                Kids will have a blast on our large custom-built wooden play
                structure, climb on our soft play mats, and explore their
                creativity with endless play opportunities *
              </p>
              <ButtonLink
                buttonText="Pricing & Memberships"
                buttonLink="/pricing"
                buttonClass="bg-soft-blue hover:bg-worm-blue my-0"
              />
            </div>
          </div>
          <div className="relative w-fit">
            <Image
              src={partiesBg}
              alt="pink play house"
              width={920}
              height={854}
              className="max-w-[460px] w-full"
            />
            <div className="absolute top-0 left-0 pt-[90px] xxs:pt-[120px] px-[2.25rem] xs:px-[3rem] flex flex-col justify-center items-center gap-[1rem] xs:gap-[1.75rem] max-w-[460px] w-full">
              <h2 className="xs:mt-[1rem]">Parties & Events</h2>
              <p className="">
                Book your party with us and enjoy full, private access to our
                facility. The venue will be exclusively yours, closed to the
                public. Regular snack & drink menu will be available *
              </p>
              <ButtonLink
                buttonText="Start Planning Your Event"
                buttonLink="/parties"
                buttonClass="bg-soft-pink hover:bg-worm-pink my-0"
              />
            </div>
          </div>
        </div>
        <p className="pt-[1rem]">
          * Socks must be worn on the play turf and structures at all times.
        </p>
      </div>
    </section>
  );
}
