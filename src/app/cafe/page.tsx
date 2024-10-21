import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import CafePage from '@/components/cafe/CafePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cafe | The Fun Bug, Play Studio & Parties',
  description:
    'Enjoy your favorite beverage while you’re little bugs play! Check back for our seasonal specialties.',
};

export default function ContactPage() {
  return (
    <GlobalLayout>
      <CafePage />
    </GlobalLayout>
  );
}
