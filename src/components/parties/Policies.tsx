import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function Policies() {
  const cleanupBullets = [
    'Please gather all toys and return them to their general areas before you leave. It does not need to be perfect—just placed back where they belong.',
    'Food and drinks are not allowed in the play area. Please help us by sharing this reminder with your guests.',
    'We also ask that you take your trash bag with you at the end of your event. The dumpster is located behind the buildings on the corner. A $50 clean-up fee will apply if toys are left out in excess, if food or drink is found in the play spaces, or if trash must be removed by our staff.',
  ];

  const diyBullets = [
    'Self-assembled balloon décor (not professionally installed)',
    'Homemade or personally purchased desserts',
    'Table décor, themed items, signage, and party favors',
  ];

  const addonBullets = [
    'Balloon garlands and balloon décor',
    'Custom hand-painted banners',
    'Custom royal-iced sugar cookies',
  ];

  const vendorBullets = [
    'Professional balloon artists or balloon-installation services',
    'Custom cookie decorators',
    'Custom sign or banner vendors',
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
              {cleanupBullets.map((r, i) => (
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
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[1.1rem] lg:text-[1.25rem] font-bold">
              Outside Vendor Policy – Party Add-Ons
            </h2>
            <p>
              To ensure a consistent, high-quality experience for all parties
              hosted at The Fun Bug Play Studio & Parties, and to maintain the
              integrity of our space, the following policy applies to all
              private events:
            </p>
            <div className="pl-[1.5rem] flex flex-col gap-[1rem]">
              <h3 className="text-[.8rem] lg:text-[1rem] font-bold">
                DIY Décor & Items &#40;Allowed&#41;
              </h3>
              <p>
                Clients are welcome to bring and set up their{' '}
                <strong>own DIY decorations and items,</strong> including:
              </p>
              <ul className="grid grid-cols-1 gap-[1rem]">
                {diyBullets.map((r, i) => (
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
              <p>
                As long as these items are{' '}
                <strong>
                  fully DIY and set up by the client or their guests,
                </strong>{' '}
                they are permitted. Professional bakers may be hired for cake
                and cupcakes as these are not items offered in house.
              </p>
              <h3 className="text-[.8rem] lg:text-[1rem] font-bold">
                Outside Vendors &#40;Not Permitted for Certain Services&#41;
              </h3>
              <p>
                The Fun Bug offers in-house party add-ons, including but not
                limited to:
              </p>
              <ul className="grid grid-cols-1 gap-[1rem]">
                {addonBullets.map((r, i) => (
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
              <p>
                Because these services are provided in-house,{' '}
                <strong>
                  outside vendors may not be hired, contracted, or used for
                  these same services during parties hosted at our facility.
                </strong>
              </p>
              <p>This includes (but is not limited to):</p>
              <ul className="grid grid-cols-1 gap-[1rem]">
                {vendorBullets.map((r, i) => (
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
              <h3 className="text-[.8rem] lg:text-[1rem] font-bold">
                Enforcement & Fees
              </h3>
              <ul className="grid grid-cols-1 gap-[1rem]">
                <li className="flex gap-[0.5rem] items-center">
                  <Image
                    src={bulletImg}
                    alt="lady bug bullet"
                    height={42}
                    width={42}
                    className="self-start"
                    loading="lazy"
                  />
                  <p>
                    Any outside vendor or professionally provided service that
                    duplicates an in-house offering is{' '}
                    <strong>not permitted</strong> in the space.
                  </p>
                </li>
                <li className="flex gap-[0.5rem] items-center">
                  <Image
                    src={bulletImg}
                    alt="lady bug bullet"
                    height={42}
                    width={42}
                    className="self-start"
                    loading="lazy"
                  />
                  <p>
                    <strong>
                      If this policy is violated, a $50 policy violation fee
                      will be charged to the card on file,
                    </strong>{' '}
                    and the outside items or vendor may be required to be
                    removed immediately. No refunds will be issued.
                  </p>
                </li>
              </ul>
              <p>
                By booking a party at The Fun Bug, the client acknowledges and
                agrees to this outside vendor policy.
              </p>
            </div>
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
