"use client";
import {
  Award,
  Building,
  Clock,
  GraduationCap,
  MapPinIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { education } from "@/data/contact-info";
import { motion, Variants } from "framer-motion";

export const EducationSection = () => {
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
  const timelineVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <motion.h2
          className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GraduationCap className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          Education
        </motion.h2>
        <motion.p
          className="text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Academic background and achievements
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 w-4 h-4 bg-slate-600 dark:bg-slate-400 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              />

              {/* Content */}
              <motion.div
                className="ml-16 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 w-full hover:shadow-md transition-shadow"
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.div
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 lg:mt-0">
                    <motion.div
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-400"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.2 }}
                    >
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        GPA: {edu.gpa}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                <motion.p
                  className="text-slate-600 dark:text-slate-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 + index * 0.2 }}
                >
                  <span className="font-medium">Focus:</span> {edu.focus}
                </motion.p>

                <div>
                  <motion.h4
                    className="font-semibold text-slate-900 dark:text-slate-100 mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    Achievements
                  </motion.h4>
                  <motion.div
                    className="grid gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Award className="h-4 w-4 text-slate-500 dark:text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
