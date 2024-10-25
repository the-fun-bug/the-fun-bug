import React from 'react';
import dynamic from 'next/dynamic';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import MonthlyCalendar from '../common/MonthlyCalendar';

const BookEvent = dynamic(() => import('./BookEvent'), { ssr: false });

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
