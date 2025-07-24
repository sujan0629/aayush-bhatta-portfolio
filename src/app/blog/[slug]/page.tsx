import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
           <article className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={post.hint}
                  />
                </div>
                <div className="mb-4 text-center">
                    <CardTitle className="text-4xl font-bold tracking-tight">{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>{post.content}</p>
                </div>
              </CardContent>
            </Card>
           </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
