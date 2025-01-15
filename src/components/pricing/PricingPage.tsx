import React from 'react';
import dynamic from 'next/dynamic';
import PricingHeader from './PricingHeader';
import OpenPlayAdmissions from './Admissions';
import Memberships from './Memberships';
import cafeDrinksImg from './img/cafe-drinks-pricing.png';
import playDateImg from './img/play-date.png';

const RulesOfPlay = dynamic(() => import('../about/RulesOfPlay'));
const FrequentlyAskedQuestions = dynamic(
  () => import('../about/FrequentlyAskedQuestions')
);
const RainbowSection = dynamic(() => import('../common/RainbowSection'));
const ImageNextToTextSection = dynamic(
  () => import('../common/ImageNextToText')
);

export interface AdmissionsPricing {
  young: number;
  older: number;
}

export interface MembershipPricing {
  one: number;
  two: number;
  three: number;
}

export default function PricingPage({
  admissionsPricing,
  membershipPricing,
}: {
  admissionsPricing: AdmissionsPricing;
  membershipPricing: MembershipPricing;
}) {
  return (
    <>
      <PricingHeader />
      <OpenPlayAdmissions admissionsPricing={admissionsPricing} />
      <Memberships membershipPricing={membershipPricing} />
      <ImageNextToTextSection
        imageSrc={playDateImg}
        alt="Three drinks from the cafe side by side"
        imageSide="right"
        imageClass="w-full max-w-[550px]"
        imageHeight={688}
        imageWidth={1188}
        title="Private Play Dates"
        paragraph="Interested in a private play date reservation? Enjoy exclusive access to our space for a fun and safe playtime experience. To schedule your private play date, reach out to us directly for more details and pricing."
        buttonText="Book a Play Date"
        buttonLink="mailto:contact@thefunbug.com"
        buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
        allPadding={true}
      />
      <ImageNextToTextSection
        imageSrc={cafeDrinksImg}
        alt="Three drinks from the cafe side by side"
        imageSide="left"
        imageClass="w-full max-w-[550px]"
        imageHeight={460}
        imageWidth={1100}
        title="Visit The Fun Bug's Cafe"
        paragraph="At The Fun Bug, kick back with a delicious cup of coffee or Lotus energy refresher from our café while your kids have a blast in our awesome playground. Our cozy seating area is perfect for enjoying tasty snacks, so you can relax and know your little ones are having a fantastic time!"
        buttonText="View Menu"
        buttonLink="/cafe"
        buttonClass="bg-cafe/50 hover:bg-cafe"
        allPadding={true}
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
