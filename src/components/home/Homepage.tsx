import React from 'react';
import dynamic from 'next/dynamic';
import OurStory from './OurStory';
import HowWePlay from './HowWePlay';
import ImageNextToTextSection from '../common/ImageNextToText';
import VisitUs from '../common/VisitUs';
import cafeDrinksImg from './img/cafe-drinks.png';
import { Hours, HomePagePhoto } from '@/types/types';

const HomepageGallery = dynamic(() => import('./Gallery'), { ssr: false });

export default function Homepage({
  hours,
  galleryImages,
}: {
  hours: Hours;
  galleryImages: HomePagePhoto[];
}) {
  return (
    <>
      <div className="w-full aspect-[5/3] bg-gray-200 mb-6">
        <HomepageGallery images={galleryImages} />
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
        paragraph="At The Fun Bug, kick back with a delicious cup of coffee from our café while your kids have a blast in our awesome playground. Our cozy seating area is perfect for enjoying tasty snacks, so you can relax and know your little ones are having a fantastic time!"
        buttonText="View Menu"
        buttonLink="/cafe#menu"
        buttonClass="bg-cafe/50 hover:bg-cafe"
        allPadding={true}
      />
      <VisitUs hours={hours} />
    </>
  );
}
