import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineEvents = [
  {
    icon: <GraduationCap />,
    date: '2023',
    title: 'Graduated in Civil Engineering',
    description: 'Completed Bachelor of Engineering from IOE, Pulchowk Campus with a focus on structural and geotechnical engineering.',
    side: 'left',
  },
  {
    icon: <Briefcase />,
    date: '2023 - Present',
    title: 'Junior Structural Engineer',
    description: 'Joined a leading consulting firm, contributing to the design and analysis of commercial and residential buildings.',
    side: 'right',
  },
  {
    icon: <GraduationCap />,
    date: '2018',
    title: 'Began University Studies',
    description: 'Enrolled in the Civil Engineering program at Tribhuvan University, IOE, Pulchowk Campus.',
    side: 'left',
  },
   {
    icon: <Briefcase />,
    date: 'Summer 2022',
    title: 'Engineering Intern',
    description: 'Internship focusing on on-site quality control, material testing, and project supervision for a hydropower project.',
    side: 'right',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold">My Journey</h2>
          <p className="text-lg text-muted-foreground mt-2">A timeline of my key milestones and experiences.</p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineEvents.sort((a,b) => parseInt(b.date) - parseInt(a.date)).map((event, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                  {event.icon}
                </div>
                
                {/* Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                        <p className="text-sm font-medium text-primary">{event.date}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
