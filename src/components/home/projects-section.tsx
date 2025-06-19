"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

export const ProjectsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity
        </p>
      </motion.div>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {getFeaturedProjects().map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 group overflow-hidden"
            variants={projectVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={project?.featuredImage}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-slate-700 dark:bg-slate-900/90 dark:text-slate-300 shadow-sm"
                >
                  {project.status}
                </Badge>
              </motion.div>
              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 rounded-lg px-2 py-1 shadow-sm">
                  <Calendar className="h-3 w-3 text-slate-500" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {project.date}
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + tagIndex * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-xs border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-3">
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                  >
                    <Link href={project.github}>
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <Link href={`/projects/${project.titleUrl}`}>
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Details
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 shadow-sm"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
