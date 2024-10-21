import React from 'react';
import ImageNextToTextSection from '../common/ImageNextToText';
import HiEveryone from './HiEveryone';
import MonthlyCalendar from '../common/MonthlyCalendar';
import RulesOfPlay from './RulesOfPlay';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import saurFlowerLogo from './img/saur-flower.png';

export default function AboutPage() {
  return (
    <div className="scroll-pt-[88px]">
      <HiEveryone />
      <MonthlyCalendar />
      <ImageNextToTextSection
        imageSrc={saurFlowerLogo}
        alt="The Saur Flower's logo"
        imageSide="right"
        imageClass="w-full max-w-[350px]"
        title="Sweeten Your Day with Saur Flour Cookies"
        paragraph="Treat your guests to freshly baked delights from our owner’s passion project, The Saur Flour. These custom royal iced sugar cookies, crafted with love and the finest ingredients, are available as an add-on option when you book your party with us. Let us know if you’d like to include them in your celebration!"
        buttonText="Book a Party"
        buttonLink="/parties"
        buttonClass="bg-soft-pink/50 hover:bg-soft-pink"
        allPadding={true}
        additionalButtonText="Cookie Gallery"
        additionalButtonLink="https://www.facebook.com/TheSaurFlourBakery/photos"
        additionalButtonClass="bg-transparent hover:bg-soft-green"
        additionalButtonExternal={true}
      />
      <RulesOfPlay />
      <FrequentlyAskedQuestions />
    </div>
  );
}
