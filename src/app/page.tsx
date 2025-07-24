import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';
import { Projects } from '@/components/sections/projects';
import { Research } from '@/components/sections/research';
import { Certifications } from '@/components/sections/certifications';
import { Gallery } from '@/components/sections/gallery';
import { Blog } from '@/components/sections/blog';
import { Achievements } from '@/components/sections/achievements';
import { QA } from '@/components/sections/qa';
import { Contact } from '@/components/sections/contact';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <Projects projects={projects.slice(0, 3)} showViewAll />
        <Research />
        <Certifications />
        <Achievements />
        <Gallery />
        <Blog showViewAll />
        <QA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
