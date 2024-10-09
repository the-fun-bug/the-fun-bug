import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from './NewsPage';
import formatDate from '@/utils/formatDate';
import CategoryButton from './CategoryButton';

type NewsArticleCardProps = {
  article: NewsArticle;
  isFeatured: boolean | null;
  isNew: boolean | null;
};

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  article,
  isFeatured,
  isNew,
}) => {
  return (
    <div className="justify-self-center w-full h-full group flex flex-col max-w-[450px]">
      <Link
        key={article.slug}
        href={`/news/${article.slug}`}
        className="relative flex justify-center items-center rounded-xl w-full h-[200px] p-[1rem] group-hover:scale-[1.03] transition-all ease-in-out"
        style={{ background: article.imgBgColor }}
      >
        <Image
          src={`${article.image}`}
          alt={article.imageDescription}
          width={330}
          height={420}
          className="max-h-[175px] w-auto"
          priority={true}
        />
        {/* Tags Layered in the Top-Left of the Image */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 p-2">
          {isFeatured && (
            <div className="bg-news-highlight text-white px-2 py-1 text-xs rounded font-semibold w-fit">
              Featured
            </div>
          )}
          {isNew && (
            <div className="bg-cafe-pink text-white px-2 py-1 text-xs rounded font-semibold w-fit">
              New
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col gap-[1rem] pt-[1rem] rounded-e-xl px-[0.25rem]">
        <div className="flex justify-between gap-[0.25rem] text-xs">
          <p className="text-left">{formatDate(article.date)}</p>
          <CategoryButton category={article.category} />
        </div>
        <Link key={article.slug} href={`/news/${article.slug}`}>
          <h2
            className="overflow-hidden text-left sm:h-[60px]"
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

export default NewsArticleCard;
