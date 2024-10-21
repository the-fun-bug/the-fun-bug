'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { NewsArticle, Category } from './NewsPage';
import NewsArticleCard from './NewsArticleCard';
import CustomDropdown, { Option } from './CustomDropdown';

type FilterOption = {
  label: string;
  value: Category;
};

export default function AllNewsArticles({
  articles = [],
}: {
  articles: NewsArticle[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  const articlesPerPage = 6;
  const [hasMounted, setHasMounted] = useState(false);

  // Dynamically create available categories based on articles
  const availableCategories: FilterOption[] = useMemo(() => {
    const articleCategories = new Set<Category>(
      articles.map((article) => article.category)
    );

    return [
      { label: 'All Categories', value: 'all' as Category },
      { label: 'The Fun Bug Updates', value: 'updates' as Category },
      { label: 'Monthly Calendar', value: 'calendar' as Category },
      { label: 'Seasonal Specialties', value: 'specialties' as Category },
    ].filter(
      (category) =>
        category.value === 'all' || articleCategories.has(category.value)
    );
  }, [articles]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const categoryParam = useMemo(() => {
    return searchParams.get('category');
  }, [searchParams]);

  useEffect(() => {
    if (!hasMounted) return;

    if (categoryParam) {
      const selectedOption = availableCategories.find(
        (category) => category.value === categoryParam
      );
      if (selectedOption) {
        setSelectedCategory(selectedOption);
      }
    } else {
      setSelectedCategory(availableCategories[0]); // Default to 'All Categories'
    }
  }, [categoryParam, hasMounted, availableCategories]);

  const isNewArticle = (date: string) => {
    const [month, day, year] = date.split('.');
    const formattedDate = `${year}-${month}-${day}`;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 21);
    return new Date(formattedDate) > sevenDaysAgo;
  };

  const sortedArticles = articles
    .filter(
      (article) =>
        article.category === 'calendar' || article.category === 'specialties'
    )
    .sort((a, b) => {
      const parseDate = (dateStr: string) => {
        const [month, day, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
      };
      return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    })
    .map((article, index) => ({
      ...article,
      isFeatured: index < 2, // Only the top 2 in these categories are featured
      isNew: isNewArticle(article.date),
    }))
    // Merge back the rest of the articles, with no featured flag set
    .concat(
      articles
        .filter(
          (article) =>
            article.category !== 'calendar' &&
            article.category !== 'specialties'
        )
        .map((article) => ({
          ...article,
          isFeatured: false,
          isNew: isNewArticle(article.date),
        }))
    );

  const filteredArticles = sortedArticles.filter((article) =>
    selectedCategory?.value === 'all'
      ? true
      : article.category === selectedCategory?.value
  );

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
    const selectedOption = availableCategories.find(
      (category) => category.value === categoryValue
    );
    if (selectedOption) {
      setSelectedCategory(selectedOption);
    }
    router.push(`/news?category=${categoryValue}#filters`);
  };

  return (
    <section className="pt-[2rem] pb-[3rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full text-center flex flex-col gap-[1.25rem] justify-center items-center">
        <div
          ref={topRef}
          id="filters"
          className="w-full flex flex-col items-center mb-[2rem] pt-[1rem]"
        >
          <div className="hidden md:flex gap-[1.5rem]">
            {availableCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryClick(category.value)}
                className={`w-fit font-medium rounded-lg px-[2rem] py-[0.5rem] my-[1rem] transition-all duration-300 hover:bg-news-category ${
                  selectedCategory?.value === category.value
                    ? 'bg-news-category'
                    : 'bg-soft-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-[450px] md:hidden pt-[1rem]">
            <CustomDropdown
              options={availableCategories}
              selectedOption={selectedCategory}
              onOptionSelect={(option) => setSelectedCategory(option)}
            />
          </div>
        </div>

        <div
          className={`w-full justify-center md:justify-between  ${displayedArticles.length > 0 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] gap-y-[3rem] md:gap-y-[2rem]' : 'w-full flex items-center justify-center'}`}
        >
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
            <p className="w-full text-center">
              We don&apos;t have any news yet. Stay tuned for updates!
            </p>
          )}
        </div>

        <div className="flex gap-[0.5rem] mt-[1.75rem] md:mt-0">
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
