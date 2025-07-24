import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Projects } from '@/components/sections/projects';
import { projects } from '@/lib/data';

export default function AllProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 section-bg" style={{backgroundImage: "url('/graph-paper.svg')"}}>
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
