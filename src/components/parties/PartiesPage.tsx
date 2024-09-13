import React from 'react';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import BookEvent from './BookEvent';
import MonthlyCalendar from '../about/MonthlyCalendar';

export default function PartiesPage() {
  return (
    <>
      <PartiesHeader />
      <PartyPackage />
      <EnhanceYourEvent />
      <BookEvent />
      <MonthlyCalendar />
    </>
  );
}
