import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import getNewsParam from '@/utils/getNewsParam';

// Fetch all news articles (Markdown files)
async function getAllNewsArticles() {
  const newsDirectory = path.join(process.cwd(), 'content/news');
  // Check if the directory exists
  if (!fs.existsSync(newsDirectory)) {
    console.warn("No 'news' directory found.");
    return []; // Return an empty array if the directory doesn't exist
  }
  const fileNames = fs.readdirSync(newsDirectory);

  const articles = fileNames.map((fileName) => {
    const filePath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: getNewsParam(data.title),
      title: data.title,
      date: data.date,
      category: data.category,
      image: data.image,
      imgBgColor: data.imgBgColor,
      imageDescription: data.imageDescription,
      content: data.content,
    };
  });

  // Sort articles by date in descending order (MM.DD.YYYY format)
  return articles.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const [month, day, year] = dateStr.split('.');
      return new Date(`${year}-${month}-${day}`);
    };

    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
}

export default getAllNewsArticles;
