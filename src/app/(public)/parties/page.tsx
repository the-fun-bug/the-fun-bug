import React from 'react';
import PartiesPage from '@/components/parties/PartiesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parties | The Fun Bug, Play Studio & Parties',
  description:
    'Are you ready to party? We are! Here at The Fun Bug, we think every day should be a party. Schedule your event today!',
};

export default function Parties() {
  return <PartiesPage />;
}
