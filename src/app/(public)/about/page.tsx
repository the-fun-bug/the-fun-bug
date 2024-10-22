import React from 'react';
import AboutPage from '@/components/about/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Fun Bug | Family-Owned Play Studio & Party Venue',
  description:
    'Learn about The Fun Bug, a family-owned indoor play studio in New Braunfels, offering creative play opportunities for kids, delicious drinks, and private party rentals.',
};

export default function ContactPage() {
  return <AboutPage />;
}
