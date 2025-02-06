import React from 'react';
import Homepage from '@/components/home/Homepage';
import type { Metadata } from 'next';
import getHoursData from '../../../lib/getHours';
import { getHomepagePhotos } from '../../../lib/getPhotosData';

export const metadata: Metadata = {
  title: 'The Fun Bug - Play Studio & Parties | Indoor Fun in New Braunfels',
  description:
    ' Discover The Fun Bug in New Braunfels, an indoor play space offering fun and safe activities for kids while parents relax with delicious drinks and free Wi-Fi.',
};

export default function Home() {
  const hours = getHoursData();
  const photos = getHomepagePhotos();

  return <Homepage hours={hours} galleryImages={photos} />;
}
