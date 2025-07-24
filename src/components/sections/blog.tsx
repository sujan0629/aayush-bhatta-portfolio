import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    title: 'The Future of Sustainable Construction Materials',
    description: 'Exploring innovations in eco-friendly materials that are revolutionizing the construction industry.',
    image: 'https://placehold.co/600x400',
    hint: 'sustainable building',
    date: 'October 26, 2023',
    tags: ['Sustainability', 'Innovation'],
  },
  {
    title: 'AI in Structural Health Monitoring',
    description: 'How artificial intelligence is being used to predict and prevent structural failures in real-time.',
    image: 'https://placehold.co/600x400',
    hint: 'modern bridge',
    date: 'September 15, 2023',
    tags: ['AI', 'Civil-Tech'],
  },
  {
    title: 'A Deep Dive into Geotechnical Site Investigation',
    description: 'Best practices and modern techniques for understanding subsurface conditions before you build.',
    image: 'https://placehold.co/600x400',
    hint: 'soil testing',
    date: 'August 02, 2023',
    tags: ['Geotechnical', 'Engineering'],
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Blog &amp; Insights</h2>
          <p className="text-lg text-muted-foreground mt-2">My thoughts on engineering, sustainability, and technology.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  data-ai-hint={post.hint}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="mb-2">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary" className="mr-2">{tag}</Badge>)}
                </div>
                <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button variant="link" className="p-0 h-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
