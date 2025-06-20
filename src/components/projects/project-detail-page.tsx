"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Target,
  CheckCircle,
} from "lucide-react";

import { ImageCarousel } from "@/components/projects/image-carousel";
import { motion, Variants } from "framer-motion";
import { getProject } from "@/data/projects";

export const ProjectDetailClientPage = ({ titleUrl }: { titleUrl: string }) => {
  const project = getProject(titleUrl);

  if (!project) {
    notFound();
  }

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Back Button */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            variant="ghost"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Project Images */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden">
            <ImageCarousel
              images={project.images}
              alt={project.title}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          className="order-2 lg:order-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={itemVariants}
            >
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
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-slate-600 dark:text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Technologies Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-slate-600 dark:text-slate-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Technologies Used
          </h2>
        </div>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.tags.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="h-6 w-6 text-slate-600 dark:text-slate-400" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Key Features
          </h2>
        </div>
        <motion.div
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          className="text-3xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Interested in This Project?
        </motion.h3>
        <motion.p
          className="text-slate-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Want to learn more about the development process or discuss a similar
          project? I&apos;d love to share more details and insights.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <Link href={`${project.demo}`}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-slate-700 text-white hover:bg-slate-600"
            >
              <Link href={`${project.github}`}>
                <Github className="mr-2 h-4 w-4" />
                Explore Code
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-slate-700 text-white hover:bg-slate-600"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
