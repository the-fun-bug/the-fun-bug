'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import getFullCatName from '@/utils/getFullCatName';

export default function CategoryButton({
  category,
}: {
  category: 'all' | 'updates' | 'calendar' | 'specailties';
}) {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push(`/news?category=${category}#filters`);
  };

  return (
    <button
      onClick={handleCategoryClick}
      className="text-right underline underline-offset-2 transition-all duration-200 hover:text-news-highlight"
    >
      {getFullCatName(category)}
    </button>
  );
}
