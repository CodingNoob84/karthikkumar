"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.div
      className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-12 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.h3
        className="text-3xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Let&apos;s Connect!
      </motion.h3>
      <motion.p
        className="text-slate-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I&apos;m always excited to meet new people and discuss interesting
        projects, technology, or even share recommendations for the latest anime
        series!
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
            className="border-slate-600 text-white hover:bg-slate-800"
          >
            <Link href="/projects">
              <Code2 className="mr-2 h-4 w-4" />
              View My Work
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
