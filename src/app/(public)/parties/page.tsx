import React from 'react';
import PartiesPage from '@/components/parties/PartiesPage';
import type { Metadata } from 'next';
import getHoursData from '../../../../lib/getHours';
import getPartyPageData from '../../../../lib/getPartyPageData';

export const metadata: Metadata = {
  title:
    'The Fun Bug - Private Party Rentals | Exclusive Indoor Playground Venue',
  description:
    'Host a memorable private party at The Fun Bug in New Braunfels, with exclusive access to our indoor playground—perfect for birthdays and special events.',
};

export default function Parties() {
  const hours = getHoursData();
  const partyData = getPartyPageData();

  return <PartiesPage hours={hours} partyData={partyData} />;
}
