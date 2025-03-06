import React from 'react';
import PricingPage from '@/components/pricing/PricingPage';
import type { Metadata } from 'next';
import getAdmissionsPricing from '../../../../lib/getAdmissionsPricing';
import getMembershipPricing from '../../../../lib/getMembershipPricing';

export const metadata: Metadata = {
  title: 'The Fun Bug - Open Play & Membership Pricing',
  description:
    'Explore pricing for our indoor playground and membership plans at The Fun Bug, New Braunfels’ top choice for affordable indoor play options for kids.',
};

export default function Pricing() {
  const admissionsPricing = getAdmissionsPricing();
  const membershipPricing = getMembershipPricing();
  return (
    <PricingPage
      admissionsPricing={admissionsPricing}
      membershipPricing={membershipPricing}
    />
  );
}
