import React from 'react';
import AboutPage from '@/components/about/AboutPage';
import type { Metadata } from 'next';
import { getAboutPhoto } from '../../../../lib/getPhotosData';

export const metadata: Metadata = {
  title: 'About The Fun Bug | Family-Owned Indoor Playground & Party Venue',
  description:
    'Learn about The Fun Bug, a family-owned indoor playground in New Braunfels, offering creative indoor play opportunities for kids, delicious drinks, and private party rentals.',
};

export default function ContactPage() {
  const photo = getAboutPhoto();

  return <AboutPage photo={photo} />;
}
