import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import PricingPage from '@/components/pricing/PricingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | The Fun Bug, Play Studio & Parties',
  description:
    'Come join us at our play studio where you’ll find a fun, aesthetic, and clean place for both kids and parents to enjoy!',
};

export default function Pricing() {
  return (
    <GlobalLayout>
      <PricingPage />
    </GlobalLayout>
  );
}
