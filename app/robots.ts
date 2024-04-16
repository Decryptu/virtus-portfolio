export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://virtus-portfolio.vercel.app/sitemap.xml',
    host: 'https://virtus-portfolio.vercel.app',
  };
}
