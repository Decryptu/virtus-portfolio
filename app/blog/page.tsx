import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from 'app/db/blog';
import { Eye } from 'lucide-react';

export const metadata = {
  title: 'Articles',
  description: 'Lisez mes réflexions sur les cryptomonnaies, la finance, etc.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Lire mes articles
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 p-4 sm:flex-row sm:justify-between sm:items-center border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            href={`/blog/${post.slug}`}
          >
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex-grow">
              {post.metadata.title}
            </p>
            <div className="inline-flex items-center w-fit text-xs gap-2 px-2 py-1 border rounded-md border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 mt-2 sm:mt-0">
              <Eye size={16} /> {post.metadata.view || '1000'}
            </div>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </Link>
        ))}
    </section>
  );
}
