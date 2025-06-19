"use client";
import { funFacts, hobbies } from "@/data/contact-info";
import { Coffee } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const HobbiesSection = () => {
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
  const hobbyVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const factVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
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
            <Coffee className="h-8 w-8 text-slate-600 dark:text-slate-400" />
            Hobbies & Interests
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            What I love doing in my free time
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-200 group"
              variants={hobbyVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl ${hobby.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <hobby.icon className="h-6 w-6" />
              </motion.div>
              <motion.h3
                className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {hobby.name}
              </motion.h3>
              <motion.p
                className="text-sm text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {hobby.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-2 text-slate-900 dark:text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Fun Facts About Me
          </motion.h3>
          <motion.p
            className="text-center text-slate-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Some interesting tidbits you might find amusing
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                variants={factVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {fact}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
