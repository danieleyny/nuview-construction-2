/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nuview2.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};
