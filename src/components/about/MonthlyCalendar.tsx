import React from 'react';
import calendarImg from './img/calendar.png';
import ImageNextToTextSection from '../common/ImageNextToText';

export default function MonthlyCalendar() {
  return (
    <ImageNextToTextSection
      imageSrc={calendarImg}
      alt="calendar graphic"
      imageSide="left"
      imageClass="w-full max-w-[350px]"
      title="Check out The Fun Bug’s Monthly Calendar"
      paragraph="Stay up-to-date with all the activities that we offer by checking out our newsletter. We update it with new events every month."
      buttonText="View Latest News"
      buttonLink="/news"
      buttonClass="bg-soft-green/50 hover:bg-soft-green"
      allPadding={false}
    />
  );
}
