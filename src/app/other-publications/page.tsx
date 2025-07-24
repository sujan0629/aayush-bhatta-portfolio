import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { OtherPublications } from '@/components/sections/other-publications';

export default function OtherPublicationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <OtherPublications />
      </main>
      <Footer />
    </div>
  );
}
