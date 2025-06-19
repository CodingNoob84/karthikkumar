"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { handleResumeDownload } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="bg-slate-900 dark:bg-slate-800 text-white dark:text-white rounded-2xl p-12 text-center shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          className="text-slate-300 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life.
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
              className="bg-white text-slate-900 hover:bg-slate-100 shadow-md dark:shadow-none"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-slate-900 dark:text-white hover:bg-white hover:text-slate-900 transition-colors duration-300 dark:border-slate-600 dark:hover:bg-slate-100 dark:hover:text-slate-900"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
