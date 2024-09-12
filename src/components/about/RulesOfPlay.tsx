import React from 'react';
import Image from 'next/image';
import bulletImg from './img/bullet.png';

export default function RulesOfPlay() {
  const rules = [
    'Parents and guardians – not The Fun Bug staff – are responsible for children and must remain on site at ALL times',
    'The Fun Bug Play Studio & Parties is not responsible for lost or stolen items',
    'No shoes are permitted on the grassy turf, and children are required to wear socks',
    'No food and drinks in the play area',
    'Wash hands before entering the play area',
    'Do not tape or pin anything to the walls',
    'All children aged 12 years old and younger are welcome! Children six and under are sure to enjoy all that we have to offer. School-aged children are welcome, but must use all equipment and toys safely and in the manner in which they are intended',
    'Adults (13 years old and older) are not allowed to use play equipment',
  ];

  return (
    <section
      id="rules-of-play"
      className="scroll-pt-[88px] flex justify-center items-center py-[1.5rem] px-[1rem]"
    >
      <div className="flex flex-col gap-[1rem] w-full max-w-[1000px]">
        <h1 className="font-nickainley">The Fun Bug’sRules of Play</h1>
        <div className="grid md:grid-cols-2 justify-center md:justify-start gap-[1rem]">
          {rules.map((r, i) => (
            <div key={i} className="flex gap-[0.5rem] md:max-w-[490px]">
              <Image
                src={bulletImg}
                alt="lady bug bullet"
                height={42}
                width={42}
                className="self-start"
              />
              <p>{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
