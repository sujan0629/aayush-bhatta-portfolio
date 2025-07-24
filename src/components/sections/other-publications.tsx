import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function OtherPublications() {
  return (
    <section id="other-publications" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Other Publications</h2>
        <p className="text-lg text-muted-foreground mt-2">Conference papers, posters, and other publications.</p>
      </div>
      <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Disseminating Knowledge</h3>
                <p className="text-muted-foreground">
                In addition to journal articles, I actively participate in academic conferences and workshops to share my research with the wider engineering community. This section includes conference papers, poster presentations, and other scholarly work that contributes to the ongoing dialogue in the field.
                </p>
                <p className="text-muted-foreground">A list of these publications will be available soon.</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400"
                    alt="Publications placeholder"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="conference presentation"
                />
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
