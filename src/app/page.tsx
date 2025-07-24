import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { projects } from '@/lib/data';
import { Blog } from '@/components/sections/blog';
import { blogPosts } from '@/lib/data';
import { Research } from '@/components/sections/research';
import { Certifications } from '@/components/sections/certifications';
import { QA } from '@/components/sections/qa';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="bg-background">
          <About />
        </div>
        <div className="bg-secondary">
          <Timeline />
        </div>
        <div className="bg-background">
          <Projects projects={projects.slice(0, 3)} showViewAll />
        </div>
        <div className="bg-secondary">
          <Research />
        </div>
        <div className="bg-background">
          <Blog posts={blogPosts.slice(0, 3)} showViewAll />
        </div>
        <div className="bg-secondary">
          <Certifications />
        </div>
        <div className="bg-background">
          <QA />
        </div>
        <div className="bg-secondary">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
