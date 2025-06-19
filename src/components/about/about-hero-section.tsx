"use client";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Calendar, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
import { PersonalInfo } from "@/data/contact-info";
import { motion, Variants } from "framer-motion";

export const personalInfoWithIcons = [
  {
    icon: Calendar,
    label: "Birthday",
    value: PersonalInfo.dateOfBirth,
    color: "text-slate-600 dark:text-slate-400",
  },
  {
    icon: Heart,
    label: "Status",
    value: PersonalInfo.marriageStatus,
    color: "text-slate-600 dark:text-slate-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PersonalInfo.phonenumber,
    color: "text-slate-600 dark:text-slate-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: PersonalInfo.email,
    color: "text-slate-600 dark:text-slate-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: PersonalInfo.address,
    color: "text-slate-600 dark:text-slate-400",
  },
];

export const AboutMeSection = () => {
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
    <motion.div
      className="mb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
        {/* Image - First on mobile, right on desktop */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          variants={heroVariants}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl blur-2xl opacity-10"
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
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={PersonalInfo.profileImage}
                alt={PersonalInfo.name}
                width={400}
                height={500}
                className="relative rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Description - Second on mobile, left on desktop */}
        <motion.div
          className="order-2 lg:order-1 space-y-6"
          variants={containerVariants}
        >
          <div>
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="mb-4 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                About Me
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100"
              variants={itemVariants}
            >
              Get to Know Me Better
            </motion.h1>
            <motion.div
              className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed"
              variants={containerVariants}
            >
              <motion.p className="text-lg" variants={itemVariants}>
                {PersonalInfo.aboutme}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Personal Information - Third on mobile, below both on desktop */}
      <motion.div
        className="order-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            Personal Information
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalInfoWithIcons.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className={`h-5 w-5 ${info.color}`} />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {info.label}
                  </p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
