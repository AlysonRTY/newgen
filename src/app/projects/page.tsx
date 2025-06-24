import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One, highlighting the key features and technologies used. This project solves a real-world problem by doing X, Y, and Z.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/your-username/project-one",
    live: "https://project-one.your-domain.com",
  },
  {
    title: "Project Two",
    description:
      "This project showcases my ability to work with APIs and external services. It integrates with a popular service to provide useful data visualizations.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/your-username/project-two",
    live: "https://project-two.your-domain.com",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first application built with a focus on user experience and performance. It includes features like real-time updates and offline capabilities.",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/your-username/project-three",
    live: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Projects
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Here are some of the projects I've worked on. Feel free to explore
          them.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-lg border border-gray-200/80 p-6 transition-all hover:border-transparent hover:shadow-lg dark:border-gray-800/80 dark:hover:shadow-black/20"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-900/50"></div>
            <div className="relative">
              <div className="flex flex-col justify-between md:flex-row md:items-start">
                <div className="mb-4 space-y-2 md:mb-0">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {project.title}
                  </h3>
                  <p className="max-w-xl text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild size="sm">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
