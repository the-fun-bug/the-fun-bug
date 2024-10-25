/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thefunbug.com', // Your domain
  generateRobotsTxt: true, // Generate robots.txt
  changefreq: 'monthly', // Change frequency
  priority: 0.7, // Default priority for all routes
  exclude: ['/admin'], // Exclude /admin from the sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' }, // Disallow /admin for all bots
    ],
  },
};
