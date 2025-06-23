import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {project.github && (
                <Button asChild variant="outline">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
