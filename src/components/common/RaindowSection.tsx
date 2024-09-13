import React from 'react';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import raindowImg from './img/rainbow.png';

type RainbowSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonClass: string;
};

export default function RainbowSection({
  title,
  description,
  buttonText,
  buttonLink,
  buttonClass,
}: RainbowSectionProps) {
  return (
    <section
      className={`flex items-center justify-center pt-[1.5rem] md:px-[1rem]`}
    >
      <div
        className={`flex gap-[1rem] lg:gap-[2rem] flex-row items-center justify-center md:justify-between w-full max-w-[1000px]`}
      >
        <div className="flex flex-col gap-[1rem] max-w-[550px] lg:max-w-[490px] mb-[1rem] md:mb-0 text-center md:text-left items-center md:items-left">
          <h1 className="font-nickainley">{title}</h1>
          <p className="max-w-[490px]">{description}</p>
          <ButtonLink
            buttonText={buttonText}
            buttonLink={buttonLink}
            buttonClass={buttonClass}
          />
        </div>
        <Image
          src={raindowImg}
          alt="rainbow"
          className="hidden sm:block self-end w-full max-w-[250px] lg:max-w-[500px]"
        />
      </div>
    </section>
  );
}