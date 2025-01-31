import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and TypeScript",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2425&auto=format&fit=crop",
    link: "#",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Project Three",
    description: "AI-powered data visualization dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2440&auto=format&fit=crop",
    link: "#",
    tech: ["Python", "TensorFlow", "D3.js"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" asChild>
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}