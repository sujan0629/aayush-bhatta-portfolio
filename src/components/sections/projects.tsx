import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Seismic Performance of Reinforced Concrete Buildings',
    category: 'Academic Project',
    description: 'A comprehensive study on the seismic behavior of RC frame structures using non-linear time-history analysis in SAP2000.',
    image: 'https://placehold.co/600x400',
    hint: 'building blueprint',
    tags: ['Structural Engineering', 'Seismic Analysis', 'SAP2000'],
    links: { github: '#', report: '#' },
  },
  {
    title: 'Sustainable Urban Drainage System (SUDS) Design',
    category: 'Professional Project',
    description: 'Designed a SUDS for a new residential development, incorporating permeable pavements and green roofs to manage stormwater runoff effectively.',
    image: 'https://placehold.co/600x400',
    hint: 'green roof',
    tags: ['Sustainability', 'Water Resources', 'AutoCAD'],
    links: { report: '#' },
  },
  {
    title: 'Geotechnical Investigation for a High-Rise Building',
    category: 'Academic Project',
    description: 'Led a team to conduct soil testing, analysis, and foundation design recommendations for a proposed 20-story building.',
    image: 'https://placehold.co/600x400',
    hint: 'soil core sample',
    tags: ['Geotechnical', 'Foundation Design', 'Team Project'],
    links: {},
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my academic and professional work.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.hint}
                    />
                </div>
                <Badge variant="default" className="w-fit">{project.category}</Badge>
                <CardTitle className="font-headline pt-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.report && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.report} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Report
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
