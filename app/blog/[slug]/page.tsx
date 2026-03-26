import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getBlogPosts } from 'app/db/blog';

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  let { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://max-prue.vercel.app${image}`
    : `https://max-prue.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://max-prue.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }

  let fullDate = new Date(date).toLocaleString('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return fullDate;
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://max-prue.vercel.app${post.metadata.image}`
              : `https://max-prue.vercel.app/og?title=${post.metadata.title}`,
            url: `https://max-prue.vercel.app/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Maximilien Prué',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
