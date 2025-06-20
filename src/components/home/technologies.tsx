"use client";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Badge } from "../ui/badge";
import { Code, Database, Globe, Layers, Wrench } from "lucide-react";
import { technologiesByGroup } from "@/data/technologies";
import Image from "next/image";

type TabType = "all" | "languages" | "frameworks" | "database" | "tools";

export const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs = [
    {
      id: "all",
      label: "All",
      icon: Layers,
      count: technologiesByGroup.all.length,
    },
    {
      id: "languages",
      label: "Languages",
      icon: Code,
      count: technologiesByGroup.languages.length,
    },
    {
      id: "frameworks",
      label: "Frameworks",
      icon: Globe,
      count: technologiesByGroup.frameworks.length,
    },
    {
      id: "database",
      label: "Database",
      icon: Database,
      count: technologiesByGroup.database.length,
    },
    {
      id: "tools",
      label: "Tools",
      icon: Wrench,
      count: technologiesByGroup.tools.length,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.2, // start slightly zoomed in
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Technologies I Love
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I work with modern technologies to build scalable and efficient
          applications
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        viewport={{ once: true }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
            <Badge
              variant="secondary"
              className={`text-xs ${
                activeTab === tab.id
                  ? "bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              }`}
            >
              {tab.count}
            </Badge>
          </motion.button>
        ))}
      </motion.div>

      {/* Tech Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {technologiesByGroup[activeTab].map((tech, index) => (
            <motion.div
              key={`${activeTab}-${tech.name}`}
              className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-200 group cursor-pointer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{
                scale: 1.05,
                rotateY: 3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.div>
              <p className="font-medium text-xs text-center text-slate-900 dark:text-slate-100">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
