import React from 'react';
import PricingHeader from './PricingHeader';
import OpenPlayAdmissions from './Admissions';
import RainbowSection from '../common/RaindowSection';
import RulesOfPlay from '../about/RulesOfPlay';
import FrequentlyAskedQuestions from '../about/FrequentlyAskedQuestions';
import ImageNextToTextSection from '../common/ImageNextToText';
import cafeDrinksImg from './img/cafe-drinks.png';
import playDateImg from './img/play-date.png';

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <OpenPlayAdmissions />
      <ImageNextToTextSection
        imageSrc={playDateImg}
        alt="Three drinks from the cafe side by side"
        imageSide="right"
        imageClass="w-full max-w-[550px]"
        title="Private Play Dates"
        paragraph="Interested in a private play date reservation? Enjoy exclusive access to our space for a fun and safe playtime experience. To schedule your private play date, reach out to us directly for more details and pricing."
        buttonText="Book a Play Date"
        buttonLink="mailto:contact@thefunbug.com"
        buttonClass="bg-soft-orange/50 hover:bg-soft-orange"
      />
      <ImageNextToTextSection
        imageSrc={cafeDrinksImg}
        alt="Three drinks from the cafe side by side"
        imageSide="left"
        imageClass="w-full max-w-[550px]"
        title="Visit The Fun Bug’s Cafe"
        paragraph="At The Fun Bug, kick back with a delicious cup of coffee from our café while your kids have a blast in our awesome playground. Our cozy seating area is perfect for enjoying tasty snacks, so you can relax and know your little ones are having a fantastic time!"
        buttonText="View Menu"
        buttonLink="/cafe"
        buttonClass="bg-soft-yellow/50 hover:bg-soft-yellow"
      />
      <RulesOfPlay />
      <FrequentlyAskedQuestions />
      <RainbowSection
        title="Have You Heard?"
        description="You can reserve out entire space to host private events and parties. Full Cafe menu is included!"
        buttonText="Book a Private Event"
        buttonLink="/parties"
        buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
      />
    </>
  );
}
