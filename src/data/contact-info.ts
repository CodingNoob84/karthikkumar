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
    title: "Full Stack Developer",
    company: "Sulekha.com New Media Private Limited",
    period: "February 2022 - Present",
    location: "Chennai, India",
    description:
      "Contributed to the end-to-end development of an event ticket booking platform, working across both frontend and backend using .NET, jQuery, React, Node.js, and Next.js. Built RESTful APIs and dashboards to help event organizers manage listings, track ticket sales, and monitor activity. Ensured seamless operations with responsive UI, secure payment integration, and efficient backend workflows.",

    achievements: [
      "Built scalable ticket booking workflows from scratch",
      "Enhanced platform usability and admin insights via dynamic dashboards",
      "Ensured secure transactions and high performance across modules",
    ],
    website: "https://www.sulekha.com/",
  },
  {
    title: "Intern – Research Assistant",
    company: "Fraunhofer Institute for Machine Tools and Forming Technology (IWU)",
    period: "April 2019 - March 2020",
    location: "Chemnitz, Germany",
    description:
      "Worked on automating post-processing tasks for FEM-based welding simulations using LS-DYNA. Created C++ scripts to generate detailed analysis reports, extract simulation results, and enhance the overall efficiency of mechanical simulation workflows.",

    achievements: [
      "Automated LS-DYNA result extraction via C++ scripting",
      "Improved accuracy and speed of simulation post-processing",
      "Supported master's thesis focused on computational mechanics",
    ],
    website: "https://www.iwu.fraunhofer.de/en.html",
  },
];
 
 
export const education = [
  {
    degree: "Master of Science in Computational Mechanics",
    school: "University of Duisburg-Essen",
    period: "October 2015 - April 2020",
    location: "Duisburg, Germany",
    gpa: "7.0/10",
    focus: "Numerical Methods, Programming languages, Structure Analysis",
    achievements: [
      "Top grade in Engineering Mathematics",
      "Developed C++ scripts to automate simulations for master's thesis",
    ],
  },
  {
    degree: "Bachelor of Engineering in Mechanical Engineering",
    school: "T.J.S Engineering College",
    period: "June 2010 - April 2014",
    location: "Chennai, India",
    gpa: "8.7/10",
    focus: "Mechanical Design & Thermodynamics",
    achievements: [
      "College topper with 8.7 CGPA",
      "Led final-year project on Walky Bike",
      "President of annual college symposium",
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
