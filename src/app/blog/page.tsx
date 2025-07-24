import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Blog } from '@/components/sections/blog';

export default function AllBlogPostsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
