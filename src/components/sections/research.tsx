import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const publications = [
  {
    title: 'Non-Linear Analysis of Cable-Stayed Bridges Under Wind Loading',
    authors: 'A. Bhatta, Dr. R. K. Sharma',
    status: 'Published',
    journal: 'Journal of Structural Engineering, Vol. 18, Issue 4, 2023',
    abstract: 'This paper presents a detailed study on the aerodynamic and aeroelastic behavior of long-span cable-stayed bridges using computational fluid dynamics (CFD) and finite element analysis (FEA). The results provide insights into optimizing cable arrangements for enhanced stability.',
  },
  {
    title: 'Application of Bamboo as a Sustainable Reinforcement in Concrete',
    authors: 'A. Bhatta, S. Adhikari',
    status: 'Under Review',
    journal: 'Journal of Sustainable Materials',
    abstract: 'Investigating the feasibility of using treated bamboo as a low-cost, sustainable alternative to steel reinforcement in low-rise residential buildings. The study includes material testing and analysis of flexural strength of bamboo-reinforced concrete beams.',
  },
];

export function Research() {
  return (
    <section id="research" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Research &amp; Publications</h2>
          <p className="text-lg text-muted-foreground mt-2">My contributions to the field of civil engineering.</p>
        </div>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {publications.map((pub, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    <div className="text-left">
                      <h3 className="font-headline text-lg">{pub.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                         <Badge variant={pub.status === 'Published' ? 'default' : 'secondary'}>{pub.status}</Badge>
                         <p className="text-sm text-muted-foreground">{pub.authors}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold text-muted-foreground mb-2">{pub.journal}</p>
                    <p className="leading-relaxed">{pub.abstract}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
