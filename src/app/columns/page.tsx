import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Columns } from '@/components/sections/columns';

export default function ColumnsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <Columns />
      </main>
      <Footer />
    </div>
  );
}
