import {
  Book,
  Camera,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Phone,
  Trophy,
  Tv,
  Twitter,
} from "lucide-react";

export const PersonalInfo = {
  name: "Karthik kumar",
  profileImage: "/images/karthi-profileimage.png",
  email: "karthithelearner@gmail.com",
  phonenumber: "+91 8778344318",
  address: "Chennai, Tamilnadu, India",
  dateOfBirth: "April 8th 1992",
  marriageStatus: "Married",
  aboutme:
    "I'm a passionate full-stack developer with over 6 years of experience in creating innovative digital solutions. My journey in technology began during my college years and has evolved into a career focused on building scalable, user-centric applications. My approach to development combines technical expertise with creative problem-solving, always keeping the end user's experience at the forefront of every project.",
  github: "https://github.com/CodingNoob84",
  linkedin: "https://in.linkedin.com/",
  twitter: "https://x.com/",
};

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Managing a team of 5 developers and architecting scalable solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Led migration to microservices architecture",
      "Mentored 3 junior developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description:
      "Developed and maintained multiple web applications from concept to deployment. Worked closely with design and product teams to deliver user-centric solutions.",
    achievements: [
      "Built 5+ production applications",
      "Implemented CI/CD pipelines",
      "Reduced deployment time by 60%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2018 - 2020",
    location: "Los Angeles, CA",
    description:
      "Specialized in creating responsive, interactive web interfaces for various clients. Collaborated with designers to bring creative visions to life.",
    achievements: [
      "Delivered 20+ client projects",
      "Improved website loading speed by 50%",
      "Established component library",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    location: "Stanford, CA",
    gpa: "3.8/4.0",
    focus: "Software Engineering & Machine Learning",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Research in AI and Natural Language Processing",
      "Published 2 papers in IEEE conferences",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of California, Berkeley",
    period: "2012 - 2016",
    location: "Berkeley, CA",
    gpa: "3.7/4.0",
    focus: "Software Development & Systems Design",
    achievements: [
      "Magna Cum Laude graduate",
      "President of Computer Science Club",
      "Winner of Annual Hackathon 2015",
    ],
  },
];

export const hobbies = [
  {
    name: "Cricket",
    icon: Trophy,
    description: "Playing cricket since childhood, weekend league player",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Binge Watching",
    icon: Tv,
    description: "Love exploring new series and documentaries",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Anime Lover",
    icon: Gamepad2,
    description: "Passionate about anime series and manga",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and landscapes during travels",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },

  {
    name: "Reading",
    icon: Book,
    description: "Sci-fi novels and tech books are my favorites",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Music",
    icon: Music,
    description: "Playing guitar and discovering new artists",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
];

export const funFacts = [
  "🏆 Won 3 hackathons in college",
  "🌍 Visited 5+ countries",
  "📚 Read 5+ books last year",
  "🎮 Completed 20+ video games",
  "🏃‍♂️ Play Cricket every weekend",
  "🍜 Can cook 10+ cuisines",
];

export const NAME = PersonalInfo.name;

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: PersonalInfo.email,
    href: `mailto:${PersonalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PersonalInfo.phonenumber,
    href: `tel:${PersonalInfo.phonenumber}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PersonalInfo.address,
    href: `https://www.google.com/maps?q=${encodeURIComponent(
      PersonalInfo.address.trim()
    )}`,
  },
];

export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: PersonalInfo.github,
    color: "hover:text-slate-600 dark:hover:text-slate-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: PersonalInfo.linkedin,
    color: "hover:text-slate-600 dark:hover:text-slate-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: PersonalInfo.twitter,
    color: "hover:text-slate-600 dark:hover:text-slate-400",
  },
];
