import React from 'react';
import NewsPage from '@/components/news/NewsPage';
import type { Metadata } from 'next';
import getAllNewsArticles from '../../../../lib/getAllNewsArticles';

export const metadata: Metadata = {
  title: 'The Fun Bug News',
  description:
    'Stay in the loop with all the buzz at The Fun Bug! Explore our monthly newsletter for the latest events, seasonal sips, and exciting updates.',
};

export default async function Parties() {
  const articles = await getAllNewsArticles();
  return <NewsPage articles={articles} />;
}
