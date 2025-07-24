import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, FileText } from 'lucide-react';

const certifications = [
  {
    title: 'Nepal Engineering Council (NEC) License',
    category: 'Civil \'A\' Category',
    id: 'Reg. No. 12345 Civil',
    description: 'Licensed to practice as a professional Civil Engineer in Nepal.',
  },
  {
    title: 'Advanced AutoCAD for Civil Engineers',
    category: 'Workshop',
    id: 'Cert. ID: ACAD-9876',
    description: 'Completed an intensive 40-hour workshop on advanced 2D and 3D drafting techniques.',
  },
  {
    title: 'Certified Project Management Associate',
    category: 'Certification',
    id: 'Cert. ID: CPMA-5432',
    description: 'Verified understanding of project management principles and methodologies.',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Certifications &amp; Licensure</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional credentials and qualifications.</p>
        </div>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <li key={index} className="flex flex-col md:flex-row gap-4 border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline text-xl font-semibold">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 my-1">
                      <p className="font-medium text-primary">{cert.category}</p>
                      <p className="text-sm text-muted-foreground">{cert.id}</p>
                    </div>
                    <p className="text-muted-foreground mt-1">{cert.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
