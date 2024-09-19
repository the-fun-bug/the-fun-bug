import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import NewsPage from '@/components/news/NewsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | The Fun Bug, Play Studio & Parties',
  description:
    'Stay in the loop with all the buzz at The Fun Bug! Explore our monthly newsletter for the latest events, seasonal sips, and exciting updates.',
};

export default function Parties() {
  return (
    <GlobalLayout>
      <NewsPage />
    </GlobalLayout>
  );
}
