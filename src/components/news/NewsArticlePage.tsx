import React from 'react';
import NewsArticleCard from './NewsArticleCard';
import { NewsArticle } from './NewsPage';
import Link from 'next/link';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import getFullCatName from '@/utils/getFullCatName';
import { remark } from 'remark';
import html from 'remark-html';

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
    <div className="py-[3rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="max-w-[1400px] w-full text-center flex flex-col justify-center items-center">
        <Link
          href="/news"
          className="underline mb-[3rem] flex w-full underline-offset-2 transition-all duration-200 hover:text-news-highlight"
        >
          &lt; Back to All News
        </Link>
        <section className="w-full pb-[3rem] flex flex-col justify-center items-center gap-[4rem]">
          <div className="flex flex-col md:flex-row gap-[3rem] md:justify-between w-full max-w-[1000px]">
            <div className="w-full flex flex-col gap-[1rem] justify-between md:max-w-[500px] text-left">
              <h1 className="font-nickainley">{title}</h1>
              <div className="flex gap-[2.5rem]">
                <p>{formatDate(date)}</p>

                <Link
                  href={`/news/#${article.category}`}
                  className="underline underline-offset-2 transition-all duration-200 hover:text-news-highlight"
                >
                  {getFullCatName(category)}
                </Link>
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
          <h1 className="font-nickainley pb-[3rem]">Recent News</h1>
          <div className="flex flex-col md:flex-row justify-between">
            {recentArticles.map((a) => (
              <NewsArticleCard key={a.title} article={a} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
