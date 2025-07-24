import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function OtherPublications() {
  return (
    <section id="other-publications" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Other Publications</h2>
        <p className="text-lg text-muted-foreground mt-2">Conference papers, posters, and other publications.</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Content for Other Publications will be added here soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
