import { Metadata } from 'next';
import NewsArticlePage from '@/components/news/NewsArticlePage';
import getNewsParam from '@/utils/getNewsParam';
import getAllNewsArticles from '../../../../../lib/getAllNewsArticles';

// TODO: Temporary use of `any` for `params` due to a Next.js 15.3.1 typing issue.
//
// Next.js 15.3.1 incorrectly infers `params` as `Promise<any>` internally,
// which causes build errors when strongly typing route params.
//
// Current workaround:
// - Type `params` as `any` to allow build to succeed.
// - Treat `params.newsTitle` as a normal string inside the component.
//
// When to fix:
// - Once Next.js 15.4 (or later stable release) is available
//   and provides proper `PageProps` typing (or corrects internal inference),
//   replace `params: any` with a strong type:
//
//   ```tsx
//   type NewsPageProps = { params: { newsTitle: string } };
//   ```
//
//   and update function signatures:
//
//   ```tsx
//   export default async function NewsDetailPage({ params }: NewsPageProps) { ... }
//   export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> { ... }
//   ```
//
// Related Issue: [Consider linking to GitHub Next.js issue if one exists later]

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const decodedUrlParam = decodeURIComponent(params.newsTitle);

  const allArticles = await getAllNewsArticles();
  const article = allArticles.find(
    (a) => getNewsParam(a.title) === decodedUrlParam
  );

  if (article) {
    const title = `${article.title} | The Fun Bug News`;
    const description = `Read the latest updates about ${article.title}`;
    const url = new URL(
      `/news/${params.newsTitle}`,
      'https://thefunbug.com'
    ).toString();

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
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

export default async function NewsDetailPage({ params }: any) {
  const decodedUrlParam = decodeURIComponent(params.newsTitle);

  const allArticles = await getAllNewsArticles();
  const article = allArticles.find(
    (a) => getNewsParam(a.slug) === decodedUrlParam
  );

  const recentArticles = allArticles.slice(0, 3);

  if (article) {
    return (
      <NewsArticlePage article={article} recentArticles={recentArticles} />
    );
  } else {
    return (
      <div className="bg-white dark:bg-navySmoke">
        <p className="font-visbyBold text-mauvelous dark:text-softOpal min-h-[250px] h-full w-full flex items-center justify-center">
          Oops! News article not found.
        </p>
      </div>
    );
  }
}

export async function generateStaticParams(): Promise<
  Array<{ newsTitle: string }>
> {
  const allArticles = await getAllNewsArticles();

  if (!allArticles || allArticles.length === 0) {
    console.warn('No articles found to generate static params.');
    return [];
  }

  return allArticles.map((article) => ({
    newsTitle: getNewsParam(article.title),
  }));
}
