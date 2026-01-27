import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function RulesOfPlay() {
  const rules = [
    'To better support a safe and positive environment, open play will now be limited to children ages 6 and under. We’ve found that this adjustment allows our younger kiddos to play more freely and safely, which is at the heart of what The Fun Bug was created for.',
    'For private parties only, children up to age 10 are still welcome to enjoy the play structure, as long as they are being respectful and mindful of younger children. We understand that many parties include older siblings and guests, and we’re happy to accommodate them in this setting.',
    'No shoes are permitted on the grassy turf. Children and adults are required to wear socks. If you forget your child’s socks, you may purchase a pair at our counter for $3.',
    'A Fun Bug staff member will announce when there are 10 minutes left in your play session. Please use this time to gather your belongings and prepare to exit so we can welcome the next group on time.',
    'Parents and guardians — not The Fun Bug staff — are responsible for their children and must remain on site at ALL times.',
    'The Fun Bug Play Studio & Parties is not responsible for lost or stolen items.',
    'Please sanitize hands before entering the play area.',
    'Do not tape or pin anything to the walls.',
    'No food or drinks are allowed in the play area.',
  ];

  return (
    <section
      id="rules-of-play"
      className="flex justify-center items-center py-[3rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1.25rem] w-full max-w-[1200px]">
        <h2 className="font-nickainley pb-[1.5rem]">
          The Fun Bug’sRules of Play
        </h2>
        <div className="grid md:grid-cols-2 justify-center md:justify-start gap-[1.25rem]">
          {rules.map((r, i) => (
            <div key={i} className="flex gap-[0.5rem] md:max-w-[500px]">
              <Image
                src={bulletImg}
                alt="lady bug bullet"
                height={84}
                width={84}
                className="self-start max-w-[30px]"
                loading="lazy"
              />
              <p>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
