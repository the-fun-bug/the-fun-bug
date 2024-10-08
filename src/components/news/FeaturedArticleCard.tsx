'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NewsArticle } from './NewsPage';
import formatDate from '@/utils/formatDate';
import getFullCatName from '@/utils/getFullCatName';

type FeaturedArticleCardProps = {
  article: NewsArticle;
};

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  article,
}) => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push(`/news?category=${article.category}#filters`);
  };

  return (
    <div className="flex shadow-custom-shadow rounded-xl w-full sm:w-[525px] h-[240px] hover:scale-[1.03] transition-all ease-in-out">
      <Link
        key={article.slug}
        href={`/news/${article.slug}`}
        className={`flex justify-center items-center rounded-s-xl w-full max-w-[125px] sm:max-w-[200px]`}
        style={{ background: article.imgBgColor }}
      >
        <Image
          src={`${article.image}`}
          alt={article.imageDescription}
          width={330}
          height={420}
          className="w-full max-w-[165px]"
          priority={true}
        />
      </Link>
      <div className="flex flex-col gap-[1rem] py-[1rem] sm:py-[1.5rem] rounded-e-xl">
        <div className="flex flex-col-reverse gap-[1rem] sm:flex-row justify-between">
          <div className="flex flex-col gap-[1rem]">
            <button
              onClick={handleCategoryClick}
              className="px-[1rem] underline underline-offset-2 transition-all duration-200 hover:text-news-highlight"
            >
              {getFullCatName(article.category)}
            </button>
            <p className="px-[1rem] text-xs sm:text-sm">
              {formatDate(article.date)}
            </p>
          </div>
          <p className="self-end uppercase px-[1rem] py-[0.5rem] text-white bg-news-highlight sm:self-start rounded-s-lg">
            Featured
          </p>
        </div>
        <Link
          key={article.slug}
          href={`/news/${article.slug}`}
          className="px-[1rem]"
        >
          <h2
            className="sm:mt-[1rem] overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {article.title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
