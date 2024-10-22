import React from 'react';
import AboutPage from '@/components/about/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Fun Bug, Play Studio & Parties',
  description:
    "Learn more about The Fun Bug, a kid's play studio and event center.",
};

export default function ContactPage() {
  return <AboutPage />;
}
