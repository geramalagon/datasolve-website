import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "AI Recepetionist",
    description: "It answers phone calls for property managers.",
    image: "/project-images/ai-receptionist-thumbnail.png",
    link: "https://www.apmhelp.com/ai-receptionist",
    tech: []
  },
  {
    title: "Sailor",
    description: "AI becomes Property Management",
    image: "/project-images/sailor-thumbnail.png",
    link: "https://sailor-b75580.webflow.io/",
    tech: []
  },
  {
    title: "Delinquencies AI",
    description: "AI collects. You oversee.",
    image: "/project-images/collections-thumbnail.png",
    link: "https://collections-agent-dashboard.vercel.app/",
    tech: []
  }
];

export default function ProjectsPage() {
  return (
    <main className="py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}