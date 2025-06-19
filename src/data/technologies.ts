export const technologies = [
  {
    name: "Html",
    icon: "/icons/html.svg",
    type: "language",
  },
  {
    name: "CSS",
    icon: "/icons/css-3.svg",
    type: "language",
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    type: "language",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    type: "language",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    type: "language",
  },
  {
    name: "jQuery",
    icon: "/icons/jquery.svg",
    type: "framework",
  },
  {
    name: "Aspx Web Forms",
    icon: "/icons/aspx.svg",
    type: "framework",
  },
  {
    name: "ASP.NET Core",
    icon: "/icons/dotnet.svg",
    type: "framework",
  },
  {
    name: "C#",
    icon: "/icons/csharp.svg",
    type: "language",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    type: "framework",
  },
  {
    name: "NodeJs",
    icon: "/icons/nodejs.svg",
    type: "framework",
  },
  {
    name: "NextJs",
    icon: "/icons/nextjs.svg",
    type: "framework",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
    type: "framework",
  },
  {
    name: "MSSQL",
    icon: "/icons/mssql.svg",
    type: "database",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    type: "database",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    type: "database",
  },
  {
    name: "Redis",
    icon: "/icons/redis.svg",
    type: "tool",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    type: "tool",
  },
  {
    name: "Github",
    icon: "/icons/github.svg",
    type: "tool",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    type: "tool",
  },
  {
    name: "Azure",
    icon: "/icons/azure.svg",
    type: "tool",
  },
  {
    name: "Firebase",
    icon: "/icons/firebase.svg",
    type: "tool",
  },
  {
    name: "Shadcn",
    icon: "/icons/shadcn.svg",
    type: "tool",
  },
  {
    name: "Supabase",
    icon: "/icons/supabase.svg",
    type: "database",
  },
  {
    name: "Convex",
    icon: "/icons/convex.svg",
    type: "database",
  },
  {
    name: "Prisma ORM",
    icon: "/icons/prisma-orm.svg",
    type: "tool",
  },
];

export const technologiesByGroup = {
  all: technologies,
  languages: technologies.filter((tech) => tech.type === "language"),
  frameworks: technologies.filter((tech) => tech.type === "framework"),
  database: technologies.filter((tech) => tech.type === "database"),
  tools: technologies.filter((tech) => tech.type === "tool"),
};
