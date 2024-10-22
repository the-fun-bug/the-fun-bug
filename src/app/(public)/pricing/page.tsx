import React from 'react';
import PricingPage from '@/components/pricing/PricingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fun Bug - Open Play & Membership Pricing',
  description:
    'Explore pricing for open play sessions and membership plans at The Fun Bug, New Braunfels’ top choice for affordable indoor play options for kids.',
};

export default function Pricing() {
  return <PricingPage />;
}
