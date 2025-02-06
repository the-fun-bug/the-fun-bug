import React from 'react';
import dynamic from 'next/dynamic';
import PartiesHeader from './PartiesHeader';
import PartyPackage from './PartyPackage';
import EnhanceYourEvent from './EnhanceYourEvent';
import MonthlyCalendar from '../common/MonthlyCalendar';
import { Hours, PartyPricing } from '@/types/types';

const BookEvent = dynamic(() => import('./BookEvent'), { ssr: false });

export default function PartiesPage({
  hours,
  pricing,
}: {
  hours: Hours;
  pricing: PartyPricing;
}) {
  return (
    <>
      <PartiesHeader />
      <PartyPackage hours={hours} pricing={pricing} />
      <EnhanceYourEvent />
      <BookEvent />
      <MonthlyCalendar />
    </>
  );
}
