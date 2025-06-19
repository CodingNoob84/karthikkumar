"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Mail, Users } from "lucide-react";
import { handleResumeDownload } from "@/lib/utils";
import { PersonalInfo } from "@/data/contact-info";

export const HeroSection = () => {
  // Animation variants
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
  const heroVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image - First on mobile, right on desktop */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full blur-2xl opacity-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/karthi-profileimage.png?height=400&width=400"
                alt="Alex Johnson"
                width={400}
                height={400}
                className="relative rounded-full shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content - Second on mobile, left on desktop */}
        <motion.div
          className="order-2 lg:order-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              {/* <Badge
                variant="secondary"
                className="w-fit bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200 dark:border-green-800"
              >
                Available for work
              </Badge> */}
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100"
              variants={itemVariants}
            >
              Hi, I&apos;m {PersonalInfo.name}
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              A passionate full-stack developer who loves creating beautiful,
              functional, and user-centered digital experiences. I specialize in
              modern web technologies and enjoy solving complex problems. Always
              eager to learn and stay up-to-date with the latest tech trends.
              Collaborates effectively in cross-functional teams to deliver
              impactful products.
            </motion.p>
          </div>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 shadow-sm"
              >
                <Link href="/about">
                  <Users className="mr-2 h-4 w-4" />
                  More About Me
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 shadow-sm"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
