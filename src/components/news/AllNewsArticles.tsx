'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { NewsArticle } from './NewsPage';
import NewsArticleCard from './NewsArticleCard';

export default function AllNewsArticles({
  articles = [],
}: {
  articles: NewsArticle[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  const articlesPerPage = 6;

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'The Fun Bug Updates', value: 'updates' },
    { label: 'Monthly Calendar', value: 'calendar' },
    { label: 'Seasonal Specialties', value: 'specialties' },
  ];

  const isNewArticle = (date: string) => {
    const [month, day, year] = date.split('.');
    const formattedDate = `${year}-${month}-${day}`;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return new Date(formattedDate) > sevenDaysAgo;
  };

  // Sort articles and assign tags
  const sortedArticles = articles
    .sort((a, b) => {
      const parseDate = (dateStr) => {
        const [month, day, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
      };
      return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    })
    .map((article, index) => ({
      ...article,
      isFeatured: index < 2, // Only mark the top two articles as "Featured"
      isNew: isNewArticle(article.date), // Mark as "New" if within the last 7 days
    }));

  useEffect(() => {
    const categoryParam = searchParams.get('category') || 'all';
    setSelectedCategory(categoryParam);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  // Filter articles based on selected category
  const filteredArticles = sortedArticles.filter((article) =>
    selectedCategory === 'all' ? true : article.category === selectedCategory
  );

  // Apply pagination after filtering and assigning tags
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryValue: string) => {
    setCurrentPage(1);
    router.push(`/news?category=${categoryValue}#filters`);
  };

  return (
    <section className="pt-[2rem] pb-[3rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full text-center flex flex-col gap-[1.25rem] justify-center items-center">
        {/* FILTERS */}
        <div
          ref={topRef}
          className="flex gap-[1.5rem] mb-[2rem] pt-[1rem]"
          id="filters"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`w-fit font-medium rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 hover:bg-news-category ${
                selectedCategory === category.value
                  ? 'bg-news-category'
                  : 'bg-soft-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="w-full justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] gap-y-[2rem]">
          {displayedArticles.length > 0 ? (
            displayedArticles.map((article) => (
              <NewsArticleCard
                key={article.slug}
                article={article}
                isFeatured={article.isFeatured}
                isNew={article.isNew}
              />
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="flex gap-[0.5rem] mt-[2rem]">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`p-[0.25rem] rounded-lg ${
                  currentPage === pageNumber
                    ? 'text-black'
                    : 'text-news-highlight underline'
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
