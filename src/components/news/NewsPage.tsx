import React from 'react';
import NewsHeader from './NewsHeader';
// import FeaturedArticleCard from './FeaturedArticleCard';
import AllNewsArticles from './AllNewsArticles';

export type Category = 'all' | 'updates' | 'calendar' | 'specialties';

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: Category;
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
  // const getMostRecentArticlesByCategory = (
  //   articles: NewsArticle[],
  //   categories: string[]
  // ) => {
  //   const mostRecentArticles: Record<string, NewsArticle> = {};

  //   for (const article of articles) {
  //     if (
  //       categories.includes(article.category) &&
  //       !mostRecentArticles[article.category]
  //     ) {
  //       mostRecentArticles[article.category] = article;
  //     }

  //     // Exit loop early if we've found articles for all categories
  //     if (Object.keys(mostRecentArticles).length === categories.length) {
  //       break;
  //     }
  //   }

  //   return Object.values(mostRecentArticles);
  // };

  const categories = ['specialties', 'calendar'];
  // const featuredArticles = getMostRecentArticlesByCategory(
  //   articles,
  //   categories
  // );

  return (
    <div className="min-h-screen">
      <NewsHeader />
      {/* {featuredArticles.length > 0 && (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-[1rem] gap-y-[2rem] px-[1rem] py-[1rem] md:py-[2rem] mx-auto">
          {featuredArticles.map((article) => (
            <FeaturedArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )} */}
      <AllNewsArticles articles={articles} />
    </div>
  );
}
