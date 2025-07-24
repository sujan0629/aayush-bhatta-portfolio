import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function LiteratureCorner() {
  return (
    <section id="literature-corner" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Literature Corner</h2>
        <p className="text-lg text-muted-foreground mt-2">A selection of recommended reading and influential works.</p>
      </div>
       <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Foundational & Inspirational Texts</h3>
                <p className="text-muted-foreground">
                Beyond technical manuals and journals, I find great value in books that explore the philosophy, history, and art of engineering. This corner is dedicated to sharing works that have shaped my thinking and inspired my career, from classic texts on structural art to modern takes on sustainable design.
                </p>
                <p className="text-muted-foreground">My curated reading list will be presented here soon.</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400"
                    alt="Literature placeholder"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="classic library"
                />
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
