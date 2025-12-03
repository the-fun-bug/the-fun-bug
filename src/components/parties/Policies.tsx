import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function Policies() {
  const bullets = [
    'Please gather all toys and return them to their general areas before you leave. It does not need to be perfect—just placed back where they belong.',
    'Food and drinks are not allowed in the play area. Please help us by sharing this reminder with your guests.',
    'We also ask that you take your trash bag with you at the end of your event. The dumpster is located behind the buildings on the corner. A $50 clean-up fee will apply if toys are left out in excess, if food or drink is found in the play spaces, or if trash must be removed by our staff.',
  ];
  return (
    <section
      id="policies"
      className="flex justify-center items-center pt-[1rem] pb-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[2rem] w-full">
        <div>
          <h1 className="font-nickainley pb-[1.5rem]">
            Party Policies & Guidelines
          </h1>
          <p>
            We can’t wait to celebrate your special day! To help make your party
            smooth and stress-free, please take a moment to review our updated
            party policies before your event. Thanks for helping us keep the fun
            running safely and smoothly for everyone!
          </p>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[1.1rem] lg:text-[1.25rem] font-bold">
              Set-Up Policy
            </h2>
            <p className="">
              To protect our walls and maintain our space, we kindly ask that
              only clear tape be used to hang decorations. Other adhesives are
              not permitted due to past damage and peeling paint.
            </p>
            <p className="">
              A $50 damage fee will be applied if any other methods are used to
              hang decorations.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[1.1rem] lg:text-[1.25rem] font-bold">
              Clean-Up Policy
            </h2>
            <ul className="grid grid-cols-1 gap-[1rem]">
              {bullets.map((r, i) => (
                <li key={i} className="flex gap-[0.5rem] items-center">
                  <Image
                    src={bulletImg}
                    alt="lady bug bullet"
                    height={42}
                    width={42}
                    className="self-start"
                    loading="lazy"
                  />
                  <p>{r}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[1.1rem] lg:text-[1.25rem] font-bold">
              Late Exit Policy
            </h2>
            <p>
              To ensure our team can properly clean and prepare the space for
              the next event, all guests and belongings must be fully cleared
              from the building by your scheduled end time.
            </p>
            <p>
              A $50 late exit fee will be charged if any guests or items remain
              in the facility more than 5 minutes past your event&apos;s end
              time.
            </p>
          </div>
        </div>
        <p>
          Thank you so much for your cooperation and understanding. We truly
          appreciate your help in keeping events running smoothly for all
          families. We look forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}
