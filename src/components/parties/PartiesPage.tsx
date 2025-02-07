import React from 'react';
import dynamic from 'next/dynamic';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import MonthlyCalendar from '../common/MonthlyCalendar';
import { Hours, PartyPageData } from '@/types/types';

const BookEvent = dynamic(() => import('./BookEvent'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function PartiesPage({
  hours,
  partyData,
}: {
  hours: Hours;
  partyData: PartyPageData;
}) {
  return (
    <>
      <PartiesHeader />
      <PartyPackage hours={hours} partyData={partyData} />
      <EnhanceYourEvent />
      <BookEvent />
      <MonthlyCalendar />
    </>
  );
}
