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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#E0E0E0] dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Research />
        <Certifications />
        <Achievements />
        <Gallery />
        <Blog />
        <QA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
