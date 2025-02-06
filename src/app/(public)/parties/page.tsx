import React from 'react';
import PartiesPage from '@/components/parties/PartiesPage';
import type { Metadata } from 'next';
import getHoursData from '../../../../lib/getHours';
import getPartyPricing from '../../../../lib/getPartyPricing';

export const metadata: Metadata = {
  title: 'The Fun Bug - Private Party Rentals | Exclusive Indoor Venue',
  description:
    'Host a memorable private party at The Fun Bug in New Braunfels, with exclusive access to our indoor play space—perfect for birthdays and special events.',
};

export default function Parties() {
  const hours = getHoursData();
  const pricing = getPartyPricing();

  return <PartiesPage hours={hours} pricing={pricing} />;
}
