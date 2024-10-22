import React from 'react';
import NewsPage from '@/components/news/NewsPage';
import type { Metadata } from 'next';
import getAllNewsArticles from '../../../../lib/getAllNewsArticles';

export const metadata: Metadata = {
  title: 'The Fun Bug News | Seasonal Specials, Monthly Calendar & Updates',
  description:
    'Stay updated with The Fun Bug News! Discover seasonal cafe specials, our monthly events calendar, and the latest business updates from New Braunfels’ favorite indoor play studio.',
};

export default async function Parties() {
  const articles = await getAllNewsArticles();
  return <NewsPage articles={articles} />;
}
