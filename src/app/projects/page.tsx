import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Projects } from '@/components/sections/projects';
import { projects } from '@/lib/data';

export default function AllProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Header />
      <main className="flex-1 py-16">
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
