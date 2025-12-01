import React from 'react';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import Policies from './Policies';
// import MonthlyCalendar from '../common/MonthlyCalendar';
import { Hours, PartyPageData } from '@/types/types';

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
      {/* <MonthlyCalendar /> */}
      <Policies />
    </>
  );
}
