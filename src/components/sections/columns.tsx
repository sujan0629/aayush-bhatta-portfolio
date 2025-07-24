import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function Columns() {
  return (
    <section id="columns" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Read My Columns</h2>
        <p className="text-lg text-muted-foreground mt-2">A collection of my published columns and articles on engineering and society.</p>
      </div>
      <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Insights and Perspectives</h3>
                <p className="text-muted-foreground">
                In this space, I share my thoughts on the intersection of civil engineering, technology, and sustainable development. My columns delve into current events, industry trends, and the broader impact of engineering on our world. The content for this section is currently being curated and will be available soon.
                </p>
                <p className="text-muted-foreground">Please check back later for a collection of my published works.</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400"
                    alt="Columns placeholder"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="library newspaper"
                />
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
