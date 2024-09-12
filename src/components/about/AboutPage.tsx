import React from 'react';
import HiEveryone from './HiEveryone';
import MonthlyCalendar from './MonthlyCalendar';
import SaurFlower from './SaurFlower';
import RulesOfPlay from './RulesOfPlay';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';

export default function AboutPage() {
  return (
    <div className="scroll-pt-[88px]">
      <HiEveryone />
      <MonthlyCalendar />
      <SaurFlower />
      <RulesOfPlay />
      <FrequentlyAskedQuestions />
    </div>
  );
}
