import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Columns() {
  return (
    <section id="columns" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Read My Columns</h2>
        <p className="text-lg text-muted-foreground mt-2">A collection of my published columns and articles.</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Content for Columns will be added here soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
