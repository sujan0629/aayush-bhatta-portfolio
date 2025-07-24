import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Blog } from '@/components/sections/blog';

export default function AllBlogPostsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 section-bg" style={{backgroundImage: "url('/graph-paper.svg')"}}>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
