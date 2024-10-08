import GlobalLayout from '@/components/common/GlobalLayout';
import { Metadata } from 'next';
import NewsArticlePage from '@/components/news/NewsArticlePage';
import getNewsParam from '@/utils/getNewsParam';
import getAllNewsArticles from '../../../../lib/getAllNewsArticles';

// Dynamically generate metadata for the news article
export async function generateMetadata({
  params,
}: {
  params: { newsTitle: string };
}): Promise<Metadata> {
  const decodedUrlParam = decodeURIComponent(params.newsTitle);
  const allArticles = await getAllNewsArticles();
  const article = allArticles.find(
    (a) => getNewsParam(a.title) === decodedUrlParam
  );

  if (article) {
    const title = `${article.title} | The Fun Bug News`;
    const description = `Read the latest updates about ${article.title}`;
    const url = `/news/${params.newsTitle}`;
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: 'The Fun Bug',
        type: 'website',
      },
    };
  } else {
    return {
      title: 'News Article Not Found',
    };
  }
}

// Main component that renders the news article
export default async function NewsDetailPage({
  params,
}: {
  params: { newsTitle: string };
}) {
  const decodedUrlParam = decodeURIComponent(params.newsTitle);
  const allArticles = await getAllNewsArticles();
  const article = allArticles.find(
    (a) => getNewsParam(a.slug) === decodedUrlParam
  );

  const recentArticles = allArticles.slice(0, 3);

  if (article) {
    return (
      <GlobalLayout>
        <NewsArticlePage article={article} recentArticles={recentArticles} />
      </GlobalLayout>
    );
  } else {
    return (
      <GlobalLayout>
        <div className="bg-white dark:bg-navySmoke">
          <p className="font-visbyBold text-mauvelous dark:text-softOpal min-h-[250px] h-full w-full flex items-center justify-center">
            Oops! News article not found.
          </p>
        </div>
      </GlobalLayout>
    );
  }
}

// Generate static params for each news article based on its slug
export async function generateStaticParams() {
  const allArticles = await getAllNewsArticles();

  if (!allArticles || allArticles.length === 0) {
    console.warn('No articles found to generate static params.');
    return [];
  }

  return allArticles.map((article) => ({
    newsTitle: getNewsParam(article.title),
  }));
}
