import { Button } from "@/components/ui/button";

import Link from "next/link";
import { ProjectsList } from "@/components/projects/projects-list";
import { MoreProjects } from "@/components/projects/more-projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          A collection of projects that showcase my skills in web development,
          from simple websites to complex full-stack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <ProjectsList />

      <MoreProjects />
      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Interested in Working Together?
          </h3>
          <p className="text-slate-300 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
