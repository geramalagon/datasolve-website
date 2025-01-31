"use client";

import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2425&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered data visualization dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2440&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Tony Malagon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Data Scientist & Technical Writer
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-8">
              I deleted 147 spreadsheets last Tuesday - and it felt better than a month's worth of coffee breaks.<br/>
              
              <br/>These days, I get my dopamine hits from watching AI do the work of three people while I actually take lunch breaks.<br/>
              
              <br/><b>🤯 Wild, right?</b></p>
            
          </div>
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="default" size="lg">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Read Blog
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <Link href="https://github.com/geramalagon" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/company/datasolveio" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://youtube.com/@datasolve" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="mailto:info@datasolve.io" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}