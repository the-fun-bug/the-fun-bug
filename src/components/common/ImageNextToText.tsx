import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ButtonLink from './ButtonLink';

type ImageNextToTextSectionProps = {
  imageSrc: StaticImageData;
  alt: string;
  imageSide: 'left' | 'right';
  imageClass: string;
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  buttonClass: string;
  allPadding?: boolean;
};

export default function ImageNextToTextSection({
  imageSrc,
  alt,
  imageSide,
  imageClass,
  title,
  paragraph,
  buttonText,
  buttonLink,
  buttonClass,
  allPadding,
}: ImageNextToTextSectionProps) {
  return (
    <section
      className={`flex items-center justify-center ${allPadding ? 'py-[3rem]' : 'pb-[3rem]'} px-[1rem]`}
    >
      <div
        className={`flex gap-[1.25rem] lg:gap-[2rem] ${imageSide === 'left' ? 'flex-col-reverse lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'} items-center justify-around w-full max-w-[1200px]`}
      >
        <Image
          src={imageSrc}
          alt={alt}
          className={`${imageClass} max-w-[80%] md:max-w-[35%]`}
        />
        <div className="flex flex-col gap-[1.25rem] max-w-[750px] lg:max-w-[490px] text-center lg:text-left items-center lg:items-start">
          <h1 className="font-nickainley">{title}</h1>
          <p>{paragraph}</p>
          <ButtonLink
            buttonText={buttonText}
            buttonLink={buttonLink}
            buttonClass={buttonClass}
          />
        </div>
      </div>
    </section>
  );
}
