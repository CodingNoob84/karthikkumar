import { ExternalLink, Github } from "lucide-react";
import { ImageCarousel } from "./image-carousel";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { AllProjects } from "@/data/projects";

export const ProjectsList = () => {
  return (
    <div className="grid gap-8">
      {AllProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 group overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <ImageCarousel
                images={project.images}
                alt={project.title}
                className="group-hover:scale-105 transition-transform duration-300 h-64"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant={
                    project.status === "Completed" ? "default" : "secondary"
                  }
                  className={
                    project.status === "Completed"
                      ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800"
                      : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <Link href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white"
                >
                  <Link href={`/projects/${project.titleUrl}`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
