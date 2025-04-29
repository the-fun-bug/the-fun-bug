import React from 'react';
import ButtonLink from '../common/ButtonLink';
import HomepageGallery from './Gallery';
import OurStory from './OurStory';
import HowWePlay from './HowWePlay';
import ImageNextToTextSection from '../common/ImageNextToText';
import VisitUs from '../common/VisitUs';
import cafeDrinksImg from './img/cafe-drinks.png';
import { Hours, HomePagePhoto } from '@/types/types';

export default function Homepage({
  hours,
  galleryImages,
}: {
  hours: Hours;
  galleryImages: HomePagePhoto[];
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 pt-[1rem] px-[1rem] lg:items-center">
        <div className="lg:w-[45%] flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-nickainley pb-[1rem]">
            Welcome to The Fun Bug! Play, Laugh, and Explore.
          </h1>
          <p className="mb-2">
            Our indoor playground in New Braunfels is designed for kids to
            unleash their energy and creativity while parents relax in a clean,
            comfortable space. Whether you&apos;re planning a fun day of play, a
            private party, or just looking for the best indoor playground
            experience, we&aspos;ve got you covered!
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
            <ButtonLink
              buttonText="Reserve Play Time"
              buttonLink="https://thefunbug.as.me/play-studio-reservations"
              buttonClass="bg-soft-blue hover:bg-worm-blue"
              external={true}
              excludeMargin={true}
            />
            <ButtonLink
              buttonText="Book A Party"
              buttonLink="/parties"
              buttonClass="bg-soft-pink hover:bg-worm-pink"
              excludeMargin={true}
            />
          </div>
        </div>
        <div className="lg:w-[55%] bg-gray-200">
          <HomepageGallery images={galleryImages} />
        </div>
      </div>
      <OurStory />
      <HowWePlay />
      <ImageNextToTextSection
        imageSrc={cafeDrinksImg}
        alt="Three drinks from the cafe side by side"
        imageSide="left"
        imageClass="w-full max-w-[550px]"
        imageWidth={1188}
        imageHeight={381}
        title="The Fun Bug Cafe"
        paragraph="Recharge with a fresh-brewed coffee while your kids explore our indoor playground! The Fun Bug Café offers a cozy seating area, delicious snacks, and a relaxing spot for parents to unwind while little ones enjoy endless playtime."
        buttonText="View Menu"
        buttonLink="/cafe#menu"
        buttonClass="bg-cafe/50 hover:bg-cafe"
        allPadding={true}
      />
      <section className="flex justify-center items-center py-[3rem] px-[1rem]">
        <div className="flex flex-col justify-center items-center w-full max-w-[1200px]">
          <h2 className="text-center font-nickainley pb-[1rem] max-w-[640px] mb-[2rem]">
            Visit Us
          </h2>
          <VisitUs hours={hours} />
        </div>
      </section>
    </>
  );
}
