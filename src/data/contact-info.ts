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
    "I'm a passionate Full Stack Developer with over three years of experience crafting innovative digital solutions. What began as a curiosity during my college years has grown into a rewarding career centered on building scalable, user-focused applications. I blend technical proficiency with creative problem-solving, ensuring each project delivers a seamless and impactful user experience. With a strong commitment to quality and continuous improvement, I strive to develop solutions that are not only functional but also intuitive and forward-thinking.",
  github: "https://github.com/CodingNoob84",
  linkedin: "https://in.linkedin.com/",
  twitter: "https://x.com/",
  resumelink: "file/resume.pdf",
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
    company:
      "Fraunhofer Institute for Machine Tools and Forming Technology (IWU)",
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
    description:
      "Playing cricket whenever time allows; it's my favorite way to unwind on weekends.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Binge Watching",
    icon: Tv,
    description:
      "Movie freak and series addict — I love diving into different genres and storylines.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Cooking",
    icon: Gamepad2, // Consider replacing with a cooking/chef icon if available
    description:
      "Enjoy experimenting in the kitchen — I can cook dishes from 10+ cuisines.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Traveling",
    icon: Camera,
    description:
      "Have visited 5 countries; love capturing moments and exploring new cultures.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Reading",
    icon: Book,
    description:
      "Enjoy reading occasionally — mostly non-fiction, tech, and inspirational reads.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  {
    name: "Music",
    icon: Music,
    description:
      "Introvert at heart who finds peace in the music of A.R. Rahman and Ilaiyaraaja.",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
];

export const funFacts = [
  "🎨 Won a drawing competition during school days",
  "🏏 Play cricket whenever I get the time",
  "📖 Enjoy reading books occasionally",
  "🍳 Love cooking and experimenting with different cuisines",
  "🌍 Have traveled to 5 countries",
  "🎧 Introvert who finds joy in listening to both A.R. Rahman and Ilaiyaraaja classics",
  "🎬 Movie freak who loves exploring all genres",
  "📺 Binge-watch series whenever time allows",
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
