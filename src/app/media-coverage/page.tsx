import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MediaCoverage } from '@/components/sections/media-coverage';

export default function MediaCoveragePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <MediaCoverage />
      </main>
      <Footer />
    </div>
  );
}
