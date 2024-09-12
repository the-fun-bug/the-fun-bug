import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import AboutPage from '@/components/about/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Fun Bug, Play Studio & Parties',
  description: 'Learn more about The Fun Bug!',
};

export default function ContactPage() {
  return (
    <GlobalLayout>
      <AboutPage />
    </GlobalLayout>
  );
}
