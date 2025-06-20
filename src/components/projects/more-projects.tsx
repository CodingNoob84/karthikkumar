import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PersonalInfo } from "@/data/contact-info";

export const MoreProjects = () => {
  return (
    <div className="mt-12">
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="h-8 w-8 text-slate-600 dark:text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              More Projects Available
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              There are more websites, apps, and projects that have been built
              beyond what&apos;s showcased here. You can find additional
              repositories and code samples in my GitHub profile.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link
              href={PersonalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
