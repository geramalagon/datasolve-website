import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Building a Modern Web Application with Next.js 13",
    description: "Learn how to leverage the latest features in Next.js 13 to build scalable web applications.",
    date: "2024-03-20",
    readTime: "5 min read",
    slug: "building-modern-web-app-nextjs-13",
    category: "Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    content: `
      Next.js 13 introduces several groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore the key features and best practices for building modern web applications.

      ## Key Features

      1. **App Router**: The new app router provides a more intuitive way to handle routing in your application.
      2. **Server Components**: Leverage the power of React Server Components for better performance.
      3. **Streaming**: Implement streaming server-rendering for improved user experience.
      4. **Turbopack**: Experience faster development with the new Rust-based bundler.

      ## Getting Started

      To begin with Next.js 13, you'll need to set up your development environment. Make sure you have Node.js installed, then create a new Next.js project:

      \`\`\`bash
      npx create-next-app@latest my-app --typescript --tailwind --eslint
      \`\`\`

      ## Best Practices

      - Use Server Components by default
      - Implement proper error boundaries
      - Optimize images using next/image
      - Leverage the new metadata API
    `
  },
  {
    title: "Understanding TypeScript Generics",
    description: "A comprehensive guide to using generics in TypeScript for better type safety and code reuse.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "understanding-typescript-generics",
    category: "TypeScript",
    featured: true,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2070&auto=format&fit=crop",
    content: "Full article content here..."
  },
  {
    title: "State Management in React: A 2024 Guide",
    description: "Exploring different state management solutions in React and when to use each one.",
    date: "2024-03-10",
    readTime: "10 min read",
    slug: "state-management-react-2024",
    category: "React",
    featured: false,
    content: "Full article content here..."
  },
  {
    title: "Advanced Git Workflows for Teams",
    description: "Master complex Git workflows and improve your team's collaboration.",
    date: "2024-03-05",
    readTime: "12 min read",
    slug: "advanced-git-workflows",
    category: "DevOps",
    featured: false,
    content: "Full article content here..."
  },
  {
    title: "Building Accessible Web Applications",
    description: "Learn how to create web applications that are accessible to everyone.",
    date: "2024-03-01",
    readTime: "7 min read",
    slug: "building-accessible-web-applications",
    category: "Accessibility",
    featured: false,
    content: "Full article content here..."
  }
];

interface PageProps {
  params: {
    slug: string;
  };
}

// Add generateStaticParams for static site generation
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-white mb-8 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <Badge variant="secondary" className="hover:bg-primary">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="container px-4 mx-auto py-16">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <p className="lead text-xl text-muted-foreground mb-8">
            {post.description}
          </p>
          <div className="mt-8 space-y-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}