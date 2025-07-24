import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center bg-background">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Aayush Bhatta
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-primary font-semibold">
            Civil Engineer | Innovator | Sustainability Advocate
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Passionate about creating resilient infrastructure and leveraging technology to build a sustainable future.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact">
              <Button size="lg">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
            <a href="/aayush-bhatta-resume.pdf" download>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
