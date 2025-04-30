import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function RulesOfPlay() {
  const rules = [
    'Parents and guardians — not The Fun Bug staff — are responsible for their children and must remain on site at ALL times.',
    'The Fun Bug Play Studio & Parties is not responsible for lost or stolen items.',
    'No shoes are permitted on the grassy turf. Children and adults are required to wear socks. If you forget your child’s socks, you may purchase a pair at our counter for $3.',
    'Adults (13 years and older) are not allowed to use the play equipment.',
    'Please sanitize hands before entering the play area.',
    'Do not tape or pin anything to the walls.',
    'All children aged 12 and under are welcome! Children six and under are sure to enjoy everything we offer. School-aged children are welcome but must use all equipment and toys safely, as intended, and be respectful of younger children playing nearby.',
    'A Fun Bug staff member will announce when there are 10 minutes left in your play session. Please use this time to gather your belongings and prepare to exit so we can welcome the next group on time.',
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
