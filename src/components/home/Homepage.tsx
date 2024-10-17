import React from 'react';
import HomepageGallery from './Gallery';
import OurStory from './OurStory';
import HowWePlay from './HowWePlay';
import ImageNextToTextSection from '../common/ImageNextToText';
import VisitUs from '../common/VisitUs';
import cafeDrinksImg from './img/cafe-drinks.png';

export default function Homepage() {
  return (
    <>
      <HomepageGallery />
      <OurStory />
      <HowWePlay />
      <ImageNextToTextSection
        imageSrc={cafeDrinksImg}
        alt="Three drinks from the cafe side by side"
        imageSide="left"
        imageClass="w-full max-w-[550px]"
        title="The Fun Bug Cafe"
        paragraph="At The Fun Bug, kick back with a delicious cup of coffee from our café while your kids have a blast in our awesome playground. Our cozy seating area is perfect for enjoying tasty snacks, so you can relax and know your little ones are having a fantastic time!"
        buttonText="View Menu"
        buttonLink="/cafe#menu"
        buttonClass="bg-cafe/50 hover:bg-cafe"
        allPadding={true}
      />
      <VisitUs />
    </>
  );
}
