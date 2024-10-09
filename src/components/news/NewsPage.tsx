import React from 'react';
import NewsHeader from './NewsHeader';
import FeaturedArticleCard from './FeaturedArticleCard';
import AllNewsArticles from './AllNewsArticles';

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: 'all' | 'updates' | 'calendar' | 'specailties';
  image: string;
  imgBgColor: string;
  imageDescription: string;
  content: string;
};

export default async function NewsPage({
  articles,
}: {
  articles: NewsArticle[];
}) {
  const featuredArticles = articles.slice(0, 2);

  return (
    <div>
      <NewsHeader />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-x-[1rem] gap-y-[2rem] px-[1rem] py-[3rem] mx-auto">
        {featuredArticles.length > 0 ? (
          featuredArticles.map((article) => (
            <FeaturedArticleCard key={article.slug} article={article} />
          ))
        ) : (
          <p>No articles available</p>
        )}
      </div>
      <AllNewsArticles articles={articles} />
    </div>
  );
}
