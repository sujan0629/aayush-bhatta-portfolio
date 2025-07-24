import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Gallery } from '@/components/sections/gallery';

export default function CameraRollPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
