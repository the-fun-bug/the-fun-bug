import React from 'react';
import NewsArticleCard from './NewsArticleCard';
import { NewsArticle } from './NewsPage';
import Link from 'next/link';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import { remark } from 'remark';
import html from 'remark-html';
import CategoryButton from './CategoryButton';

export default async function NewsArticlePage({
  article,
  recentArticles,
}: {
  article: NewsArticle;
  recentArticles: NewsArticle[];
}) {
  const { title, date, category, image, imageDescription, imgBgColor } =
    article;

  const processedContent = await remark().use(html).process(article.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="pb-[3rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full text-center flex flex-col justify-center items-center">
        <Link
          href="/news"
          className="underline mb-[3rem] flex w-full underline-offset-2 transition-all duration-200 hover:text-news-highlight"
        >
          &lt; Back to All News
        </Link>
        <section className="w-full pb-[3rem] flex flex-col justify-center items-center gap-[2rem] md:gap-[4rem]">
          <div className="flex flex-col md:flex-row gap-[2rem] md:gap-[3rem] md:justify-between w-full max-w-[1000px]">
            <div className="w-full flex flex-col gap-[1rem] justify-between md:max-w-[500px] text-left">
              <h1 className="font-nickainley text-center md:text-left">
                {title}
              </h1>
              <div className="flex gap-[2.5rem] self-center md:self-start justify-between md:justify-start max-w-[450px] w-full">
                <p>{formatDate(date)}</p>
                <CategoryButton category={category} />
              </div>
            </div>
            <div
              className={`self-center flex justify-center items-center rounded-xl w-full sm:w-[450px] h-[275px] p-[1rem]`}
              style={{ background: imgBgColor }}
            >
              <Image
                src={`${image}`}
                alt={imageDescription}
                width={330}
                height={420}
                className="max-h-[250px] w-auto"
                priority={true}
              />
            </div>
          </div>

          <div
            className="w-full max-w-[1000px] flex flex-col text-left gap-[1rem]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
        <section className="w-full pt-[3rem] flex flex-col">
          <h2 className="font-nickainley pb-[3rem]">Recent News</h2>
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-[3rem] md:gap-[1rem]">
            {recentArticles.map((a) => (
              <NewsArticleCard
                key={a.title}
                article={a}
                isFeatured={null}
                isNew={null}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
