import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HardHat, Landmark, Recycle, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'Structural Analysis & Design', icon: <HardHat className="mr-2 h-4 w-4" /> },
  { name: 'Sustainable Engineering', icon: <Recycle className="mr-2 h-4 w-4" /> },
  { name: 'Geotechnical Engineering', icon: <Landmark className="mr-2 h-4 w-4" /> },
  { name: 'AutoCAD & Civil 3D', icon: <HardHat className="mr-2 h-4 w-4" /> },
  { name: 'Project Management', icon: <GraduationCap className="mr-2 h-4 w-4" /> },
  { name: 'GIS & Remote Sensing', icon: <Landmark className="mr-2 h-4 w-4" /> },
];

export function About() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2">My background, education, and technical skills.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              I am Aayush Bhatta, a dedicated and passionate Civil Engineer with a strong foundation in structural analysis, sustainable infrastructure, and project management. My academic and professional journey has been driven by a curiosity to solve complex engineering challenges and contribute to building a more resilient and sustainable future. I thrive in collaborative environments and am always eager to learn and apply new technologies in the field of civil engineering.
            </p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-bold">Bachelor of Engineering in Civil Engineering</h3>
                <p className="text-muted-foreground">Tribhuvan University, IOE, Pulchowk Campus</p>
                <p className="text-sm text-muted-foreground">2018 - 2023</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="font-bold">Higher Secondary Education (+2)</h3>
                <p className="text-muted-foreground">Prasadi Academy, Lalitpur</p>
                <p className="text-sm text-muted-foreground">2016 - 2018</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm py-1 px-3">
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
