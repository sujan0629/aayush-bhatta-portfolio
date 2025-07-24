import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/data'; // Using static data for now

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }
}
