export const METADATA = {
  author: "f.dwi_han",
  title: "Devfolio | M Fachry Dwi Han",
  description:
    "Fachry is a Frontend Developer from Indonesia, interested in crafting cross-platform applications that are both beautiful and functional.",
  siteUrl: "https://github.com/Delos-343/Devfolio",
  twitterHandle: "",
  keywords: [
    "Mohammed",
    "Fachry",
    "Dwi Handoko",
    "Frontend Developer",
    "Mobile Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Machine Learning",
    "AI",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "/public/devfolio (Nest Hub).png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Frontend + Mobile",
  "UI / UX",
  "Machine • Learning",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mfachry.dwihandoko@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/fachry-dwi-han/",
  },
  {
    name: "github",
    url: "https://github.com/Delos-343",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/f.dwi_han/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "typescript",
    "sass",
    "python",
    "nodejs",
    "figma",
    "spline",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "xamarin",
    "laravel",
    "tailwindcss",
    "chakra-ui",
  ],
  databases: ["mysql", "graphql"],
  other: ["git", "sanity-io", "vite", "firebase"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Revo Creative",
    title: "Co-Founder",
    location: "Jakarta, Indonesia",
    range: "August - ...",
    responsibilities: [
      "Leading the creation of various cross-platform software solutions.",
      "Enhanced various company's UX with gamification and personalized userflow to ensure an ever-improving online journey.",
      "The final build boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://www.linkedin.com/in/fachry-dwi-han/",
    video: "/work/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4",
  },
  {
    id: 2,
    company: "Yuan Ze University",
    title: "AI Vision & Robotics Innovation Lab Intern",
    location: "Taoyuan, Taiwan",
    range: "December - ...",
    responsibilities: [
      "Building their three-dimensional lane detection models with innovative perspective transformers.",
      "Developed pixel-perfect object-detection wth new features.",
      "Successfully rolled out an F-Score of 0.66 in five consecutive days.",
    ],
    url: "https://www.linkedin.com/in/fachry-dwi-han/",
    video: "/work/Josh Hutcherson - Whistle.mp4",
  },
  {
    id: 3,
    company: "Medium",
    title: "Writer",
    location: "Surabaya, indonesia",
    range: "September - ...",
    responsibilities: [
      "Writing a number of articles with an emphasis on Information Technology (IT).",
      "Increased engagement with my audience to 4 new readers a day.",
      "Utilized React, Firebase, and GraphQL to create a enhanced clone.",
    ],
    url: "https://medium.com/@mfachry.handoko",
    video: "/work/Saul Goodman - 3D.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
