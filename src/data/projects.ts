const getImages = (foldername: string, count: number): string[] => {
  return Array.from(
    { length: count },
    (_, i) => `/projects/${foldername}/${i + 1}.PNG`
  );
};

export const AllProjects = [
  {
    title: "Four Horsemen Fantasay League",
    titleUrl: "four-horsemen-fantasy-league",
    description:
      "A real-time fantasy cricket platform where users create virtual teams and compete based on live IPL match performances. Features player stats, leaderboards, and live scoring updates.",
    images: getImages("four-horsemen", 8),
    tags: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "Convex Auth",
      "Google OAuth",
      "Shadcn",
    ],
    features: [
      "Live IPL score updates via web scraping",
      "Real-time team and leaderboard updates using Convex",
      "User authentication with Google OAuth",
      "Fantasy team creation and performance tracking",
      "Responsive design with Tailwind CSS and shadcn/ui",
    ],
    github: "https://github.com/CodingNoob84/four-horsemen-cricket-league",
    demo: "https://four-horsemen-cricket-league.vercel.app",
    date: "2024",
    status: "Completed",
    featuredImage: "/images/ipl-game.png",
    isFeatured: true,
  },
  {
    title: "Hand Cricket Multiplayer Game",
    titleUrl: "hand-cricket-multiplayer",
    description:
      "A digital adaptation of the classic hand cricket game with online multiplayer functionality. Includes AI opponents, real-time gameplay, and interactive animations for an engaging experience.",
    images: getImages("hand-cricket", 12),
    tags: ["Nextjs", "Supabase", "TailwindCSS", "Real-time"],
    features: [
      "Real-time multiplayer with Supabase",
      "Single-player mode against AI",
      "Animated game interface and scoring",
      "Custom player name and move selection",
      "Responsive UI with TailwindCSS",
    ],
    github: "https://github.com/CodingNoob84/hc-supabase",
    demo: "https://hc-supabase.vercel.app",
    date: "2024",
    status: "Completed",
    featuredImage: "/images/hand-cricket.png",
    isFeatured: true,
  },
  {
    title: "Movie Trakt",
    titleUrl: "movie-trakt",
    description:
      "A personal watchlist tracker that maintains your viewing history and lets you share real-time activity with friends. Discover what friends are watching and compare your watch histories.",
    images: getImages("movie-trakt", 8),
    tags: ["Next.js", "TailwindCSS", "Neon Db", "TMDB API"],
    features: [
      "Personal movie and TV watchlist tracking",
      "Friend activity feed and comparisons",
      "Movie data via TMDB API",
      "Watch history syncing with Neon DB",
      "Clean, responsive UI design",
    ],
    github: "https://github.com/CodingNoob84/movie-trakt",
    demo: "https://movie-trakt.vercel.app/",
    date: "2023",
    status: "Completed",
    featuredImage: "/images/movie-trakt.png",
    isFeatured: true,
  },
  {
    title: "Guess Quest",
    titleUrl: "guess-quest",
    description:
      "Guess Quest is a social media-style platform where users can post fun and challenging guess-based questions for others to answer. Instead of likes or comments, users respond with their guesses, and the app tracks how many got it right or wrong.",
    images: getImages("guess-quest", 3),
    tags: [
      "Next.js",
      "TailwindCSS",
      "Convex Db",
      "Convex Auth",
      "Google OAuth",
    ],
    features: [
      "Guess-based question and answer system",
      "Real-time tracking of correct and incorrect guesses",
      "Authentication with Convex and Google OAuth",
      "Minimalist social media-like interface",
      "User-generated interactive posts",
    ],
    github: "https://github.com/CodingNoob84/guess-quest",
    demo: "https://guess-quest.vercel.app/",
    date: "2023",
    status: "Completed",
    featuredImage: "",
    isFeatured: false,
  },
  {
    title: "21 Game",
    titleUrl: "21-game",
    description:
      "21 Game is a mind-reading style game where three boxes display sets of random numbers. You silently think of any number you see and click the box containing it—three times in total. After the third selection, the game reveals the number you were thinking of.",
    images: getImages("21-game", 1),
    tags: ["Next.js", "TailwindCSS"],
    features: [
      "Interactive mind-reading game logic",
      "Simple and responsive UI",
      "Surprise reveal animation",
      "No user input required for guessing",
      "Lightweight front-end implementation",
    ],
    github: "https://github.com/CodingNoob84/21-game",
    demo: "https://21-game-gilt.vercel.app/",
    date: "2024",
    status: "Completed",
    featuredImage: "",
    isFeatured: false,
  },
  {
    title: "Connect",
    titleUrl: "connect",
    description:
      "Connect is a simple, interactive social media app where users can post thoughts, questions, or updates and engage through replies. Instead of traditional comments or threads, responses are conversational and fluid.",
    images: getImages("connect", 1),
    tags: ["Next.js", "TailwindCSS"],
    features: [
      "Post and reply interaction system",
      "Minimalist social feed layout",
      "Threaded conversation replies",
      "Clean and mobile-friendly design",
      "Real-time update simulation",
    ],
    github: "https://github.com/CodingNoob84/connect",
    demo: "https://connect-ten-omega.vercel.app/",
    date: "2023",
    status: "Completed",
    featuredImage: "",
    isFeatured: false,
  },
  {
    title: "Color Game",
    titleUrl: "color-game",
    description:
      "Color Game is a fun logic-based challenge where six colors are randomly arranged, and the player must guess the correct sequence. After each submission, the game reveals how many colors are in the exact correct position.",
    images: getImages("color-game", 1),
    tags: ["Next.js", "TailwindCSS"],
    features: [
      "Color sequence guessing logic",
      "Exact-position feedback system",
      "Random color generation",
      "Simple and responsive UI",
      "Replayable logic puzzle experience",
    ],
    github: "https://github.com/CodingNoob84/color-game",
    demo: "https://color-game-psi-three.vercel.app/",
    date: "2023",
    status: "Completed",
    featuredImage: "",
    isFeatured: false,
  },
  {
    title: "Movie Site",
    titleUrl: "movie-site",
    description:
      "Movie Site is a sleek movie discovery platform that showcases the latest releases, popular movies, and trending TV series all in one place. Users can explore detailed pages for each title, featuring cast and crew info, and similar recommendations.",
    images: getImages("movie-site", 4),
    tags: ["Next.js", "TailwindCSS"],
    features: [
      "Browse latest and popular movies and TV shows",
      "Movie detail pages with cast, crew, and recommendations",
      "Search and filter functionality",
      "Integration with TMDB API",
      "Clean, mobile-friendly design",
    ],
    github: "https://github.com/CodingNoob84/movie-website",
    demo: "https://mymovie-drab.vercel.app/",
    date: "2023",
    status: "Completed",
    featuredImage: "",
    isFeatured: false,
  },
];

export const getProject = (titleUrl: string) => {
  return AllProjects.find((project) => project.titleUrl === titleUrl) || null;
};

export const getFeaturedProjects = () => {
  return AllProjects.filter((project) => project.isFeatured);
};
