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
      imageHeight={600}
      imageWidth={900}
      title="Check Out The Fun Bug’s Monthly Calendar"
      paragraph="Stay up to date with all the activities we offer by visiting our News page. We update the calendar with new events every month!"
      buttonText="See What’s New"
      buttonLink="/news"
      buttonClass="bg-soft-green/50 hover:bg-soft-green"
      allPadding={true}
    />
  );
}
