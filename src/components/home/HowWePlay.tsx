import React from 'react';
import Image from 'next/image';
import ButtonLink from '../common/ButtonLink';
import pinkTopImg from './img/pink-top.png';
import blueTopImg from './img/blue-top.png';

export default function HowWePlay() {
  return (
    <section className="py-[3rem] flex flex-col justify-center items-center px-[1rem]">
      <div className="w-full max-w-[1200px] text-center flex flex-col gap-[1rem] justify-center items-center">
        <h1 className="font-nickainley pb-[100px]">This Is How We Play</h1>
        <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-[3rem]">
          <div className="flex justify-center lg:w-[50%]">
            <div className="relative w-full max-w-[460px] flex-items-center">
              <Image
                src={blueTopImg}
                width={920}
                height={206}
                className="absolute top-[-15%] max-w-[460px] w-full"
                alt="scalloped play house top"
                placeholder="blur"
              />
              <div className="flex justify-center">
                <div className="bg-soft-blue pt-[3rem] pb-[1.5rem] sm:pb-[2.75rem] px-[1rem] sm:px-[1.75rem] flex flex-col justify-center items-center gap-[1.5rem] rounded-b-xl max-w-[90%]">
                  <h2 className="xs:mt-[1rem]">Play Studio</h2>
                  <p className="max-w-[350px]">
                    Kids will have a blast on our large custom-built wooden play
                    structure, climb on our soft play mats, and explore their
                    creativity with endless play opportunities. * Reservations
                    recommended to secure your spot. Walk-ins welcome as space
                    allows.
                  </p>
                  <ButtonLink
                    buttonText="Pricing & Memberships"
                    buttonLink="/pricing"
                    buttonClass="hidden sm:block bg-soft-blue hover:bg-worm-blue"
                  />
                  <ButtonLink
                    buttonText="Pricing"
                    buttonLink="/pricing"
                    buttonClass="block sm:hidden bg-soft-blue hover:bg-worm-blue"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:w-[50%] pt-[3rem] lg:pt-0">
            <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-[3rem]">
              <div className="relative w-full max-w-[460px] flex-items-center">
                <Image
                  src={pinkTopImg}
                  width={920}
                  height={206}
                  className="absolute top-[-15%] max-w-[460px] w-full"
                  alt="scalloped play house top"
                  placeholder="blur"
                />
                <div className="flex justify-center">
                  <div className="bg-soft-pink pt-[3rem] pb-[1.5rem] sm:py-[2.75rem] px-[1rem] sm:px-[1.75rem] flex flex-col justify-center items-center gap-[1.5rem] rounded-b-xl max-w-[90%]">
                    <h2 className="xs:mt-[1rem]">Parties & Events</h2>
                    <p className="max-w-[350px]">
                      Celebrate your special occasion with private access to our
                      entire facility! Enjoy exclusive use of our space, closed
                      to the public for your event. Our regular snack and drink
                      menu will be available, and you’re welcome to bring your
                      own decorations to make the space your own.*
                    </p>
                    <ButtonLink
                      buttonText="Start Planning Your Event"
                      buttonLink="/parties"
                      buttonClass="hidden sm:block bg-soft-pink hover:bg-worm-pink"
                    />
                    <ButtonLink
                      buttonText="Start Planning"
                      buttonLink="/parties"
                      buttonClass="sm:hidden bg-soft-pink hover:bg-worm-pink"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-[1rem]">
          * Socks must be worn on the play turf and structures at all times. If
          needed, socks are available for purchase for $3.
        </p>
      </div>
    </section>
  );
}
