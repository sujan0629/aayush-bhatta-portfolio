import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MediaCoverage() {
  return (
    <section id="media-coverage" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Media Coverage</h2>
        <p className="text-lg text-muted-foreground mt-2">Mentions and features in the media.</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Content for Media Coverage will be added here soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
