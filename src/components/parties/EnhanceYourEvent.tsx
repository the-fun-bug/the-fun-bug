import React from 'react';
import Image, { StaticImageData } from 'next/image';
import thirtyMinutesImg from './img/30-minutes.png';
import cookiesImg from './img/cookies.png';
import balloonsImg from './img/baloon-arch.png';
import discountDrinksImg from './img/discounted-drinks.png';
import ButtonLink from '../common/ButtonLink';

type Enhancement = {
  title: string;
  description: string;
  image: StaticImageData;
  imageHeight: number;
  imageWidth: number;
  alt: string;
  buttonLink: string | null;
  buttonLinkExternal: boolean;
  buttonText: string | null;
  buttonClass: string | null;
};

export default function EnhanceYourEvent() {
  const enhancements: Enhancement[] = [
    {
      title: 'Additional 30 minutes of play',
      description:
        'Why let the fun stop after 2 hours? You can add an additional 30 minutes of play to your event!',
      image: thirtyMinutesImg,
      imageHeight: 670,
      imageWidth: 810,
      alt: 'The Fun Bug worm and a clock with party hats',
      buttonLink: null,
      buttonLinkExternal: false,
      buttonText: null,
      buttonClass: null,
    },
    {
      title: 'Cookies from the Saur Flour Bakery',
      description:
        'The Saur Flour’s customized creations are just the thing you need to elevate your event, customized to your party’s theme!',
      image: cookiesImg,
      imageHeight: 416,
      imageWidth: 902,
      alt: 'Two bugs enjoying heart-shaped cookies',
      buttonLink: 'https://www.facebook.com/TheSaurFlourBakery/photos',
      buttonLinkExternal: true,
      buttonText: 'Cookie Image Gallery',
      buttonClass: 'bg-transparent hover:bg-soft-green',
    },
    {
      title: 'Balloon Arch',
      description:
        'Want to add your own flare to the party but you’re not sure how? Look no further, our beautiful balloon arch will “wow” all your guests.',
      image: balloonsImg,
      imageHeight: 628,
      imageWidth: 644,
      alt: 'The Fun Bug worm wearing sunglasses under a balloon arch',
      buttonLink: null,
      buttonLinkExternal: false,
      buttonText: null,
      buttonClass: null,
    },
    {
      title: 'Non-Alcoholic Open Bar with Discounted Drinks',
      description:
        'Enjoy a non-alcoholic open bar featuring unlimited beverages from our cafe at a 10% discount, with the tab covered by the host.',
      image: discountDrinksImg,
      imageHeight: 608,
      imageWidth: 418,
      alt: 'A snail sipping on an iced coffee drink',
      buttonLink: '/cafe#menu',
      buttonLinkExternal: false,
      buttonText: 'View Cafe Menu',
      buttonClass: 'bg-transparent hover:bg-cafe',
    },
  ];
  return (
    <section className="flex justify-center items-center py-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center text-center gap-[1.25rem] w-full max-w-[1200px]">
        <h1 className="font-nickainley">Enhance Your Event</h1>
        <p className="pb-[1rem] md:pb-0">
          Explore our customizable add-ons to make your event truly exceptional.
        </p>
        <div className="w-full flex flex-col gap-[2.5rem] text-left">
          {enhancements.map((e, i) => (
            <div
              key={i}
              className={`flex flex-col-reverse md:flex-row items-center ${i % 2 === 1 ? 'md:ml-auto gap-[3rem]' : 'gap-[1.5rem]'}`}
            >
              <Image
                src={e.image}
                alt={e.alt}
                height={e.imageHeight}
                width={e.imageWidth}
                className={`w-full max-w-[60%] md:max-w-[350px]`}
              />
              <div className="flex flex-col gap-[0rem] lg:gap-[1.25rem] justify-center md:max-w-[350px] text-center md:text-left">
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                {e.buttonLink && e.buttonText && e.buttonClass && (
                  <ButtonLink
                    buttonLink={e.buttonLink}
                    buttonClass={e.buttonClass}
                    buttonText={e.buttonText}
                    external={e.buttonLinkExternal}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
