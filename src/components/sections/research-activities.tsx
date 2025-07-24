import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ResearchActivities() {
  return (
    <section id="research-activities" className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Research Activities</h2>
        <p className="text-lg text-muted-foreground mt-2">My involvement in various research projects and activities.</p>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">Content for Research Activities will be added here soon.</p>
        </CardContent>
      </Card>
    </section>
  );
}
