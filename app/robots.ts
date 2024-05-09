export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://max-prue.vercel.app/sitemap.xml',
    host: 'https://max-prue.vercel.app',
  };
}
