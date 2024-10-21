import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import Homepage from '@/components/home/Homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fun Bug, Play Studio & Parties',
  description:
    'Welcome to The Fun Bug, where playtime meets relaxation for both kids and parents! Inspired by our own children, we saw a need for more indoor play options in New Braunfels. Come join us for open play time, delicious coffee, and exclusive party rentals after hours!',
};

export default function Home() {
  return (
    <GlobalLayout>
      <Homepage />
    </GlobalLayout>
  );
}
