import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function MediaCoverage() {
  return (
    <section id="media-coverage" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Media Coverage</h2>
        <p className="text-lg text-muted-foreground mt-2">Mentions and features in the media.</p>
      </div>
      <Card>
        <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
             <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/600x400"
                    alt="Media placeholder"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="news cameras"
                />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Engineering in the Public Eye</h3>
                <p className="text-muted-foreground">
                 This section documents instances where my projects, research, or opinions have been featured in the media. It highlights the public engagement and real-world impact of my work in civil engineering.
                </p>
                <p className="text-muted-foreground">Links to articles, interviews, and other media features will be compiled and displayed here soon.</p>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}
