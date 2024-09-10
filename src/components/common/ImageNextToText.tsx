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
}: ImageNextToTextSectionProps) {
  return (
    <section className={`flex items-center justify-center py-[2rem] px-[1rem]`}>
      <div
        className={`flex gap-[3rem] ${imageSide === 'left' ? 'flex-col-reverse lg:flex-row' : 'flex-col md:flex-row-reverse'} items-center justify-between max-w-[1000px]`}
      >
        <div>
          <Image src={imageSrc} alt={alt} className={`${imageClass}`} />
        </div>
        <div className="flex flex-col gap-[1rem] max-w-[750px] lg:max-w-[490px] text-center lg:text-left items-center lg:items-start">
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
