"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Building a Modern Web Application with Next.js 13",
    date: "2024-03-20",
    readTime: "5 min read",
    slug: "building-modern-web-app-nextjs-13",
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Understanding TypeScript Generics",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "understanding-typescript-generics",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "State Management in React: A 2024 Guide",
    date: "2024-03-10",
    readTime: "10 min read",
    slug: "state-management-react-2024",
    category: "React"
  },
  {
    title: "Advanced Git Workflows for Teams",
    date: "2024-03-05",
    readTime: "12 min read",
    slug: "advanced-git-workflows",
    category: "DevOps"
  },
  {
    title: "Building Accessible Web Applications",
    date: "2024-03-01",
    readTime: "7 min read",
    slug: "building-accessible-web-applications",
    category: "Accessibility"
  }
];

const categories = ["All", "Development", "TypeScript", "React", "DevOps", "Accessibility"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm px-3 py-0.5 transition-colors ${
                category === selectedCategory 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg hover:border-primary hover:-translate-y-0.5 transition-all duration-300">
                <CardHeader className="py-4">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}