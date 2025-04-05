"use client";

import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { projects, type Project } from "./projects/page";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center">
        <div className="container px-4 mx-auto py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-left mb-12">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Hi, I'm <span className="text-primary">Tony Malagon</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Data Scientist & Technical Writer
              </p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                I deleted 147 spreadsheets last Tuesday - and it felt better than a month's worth of coffee breaks.<br/>
                
                <br/>These days, I get my dopamine hits from watching AI do the work of three people while I actually take lunch breaks.<br/>
                
                <br/><b>🤯 Wild, right?</b>
              </p>
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
          </div>
        </div>
      </section>

      {/* Remove Projects Section */}
      {/* 
      <section className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"> 
            {projects.map((project: Project, index) => (
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
      </section>
      */}
    </main>
  );
}
