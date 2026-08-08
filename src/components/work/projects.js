export const projects = [
  {
    id: 1,

    title: "Real-Time Messaging Platform",

    subtitle: "Modern real-time chat application built with the MERN stack.",

    year: "May 2026",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],

    images: [
      "/image/chat-app/signup.png",
      "/image/chat-app/chat.png",
      "/image/chat-app/contacts.png",
      "/image/chat-app/message.png",
    ],

    description:
      "A production-ready messaging platform featuring real-time communication, secure authentication, chat history persistence, and scalable backend architecture.",

    highlights: [
      "Real-time messaging powered by WebSockets with sub-second delivery.",
      "JWT authentication and authorization with protected routes.",
      "Online/offline presence tracking and persistent chat history.",
      "REST API architecture with scalable event-driven backend.",
      "Optimized MongoDB schema and database queries.",
      "Responsive interface built using React and Tailwind CSS.",
    ],

    challenges: [
      {
        title: "Real-time Communication",
        text: "Designed an event-driven Socket.IO architecture capable of handling multiple concurrent users with low latency.",
      },
      {
        title: "Authentication",
        text: "Implemented secure JWT authentication, authorization middleware, and protected API endpoints.",
      },
      {
        title: "Performance",
        text: "Optimized MongoDB queries and backend routing for faster message retrieval and improved scalability.",
      },
    ],

    github: "https://github.com/SaptarshiCodes/Real-time-chat",

    live: "https://real-time-chat-rosy-phi.vercel.app/",

    accent: "#22C55E",
  },

  {
    id: 2,

    title: "Real-Time Collaborative Coding Interview Platform",

    subtitle:
      "A collaborative coding platform for technical interviews and pair programming.",

    year: "Jun 2026",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Stream",
      "Inngest",
      "TanStack Query",
      "Tailwind CSS",
    ],

    images: [
      "/image/interview-platform/signup.png",
      "/image/interview-platform/dashboard.png",
      "/image/interview-platform/problems.png",
      "/image/interview-platform/session.png",
    ],

    description:
      "A full-stack interview platform enabling collaborative code editing, video conferencing, live chat, secure authentication, and automated code execution.",

    highlights: [
      "Collaborative real-time code editor.",
      "Integrated video conferencing using Stream.",
      "Secure authentication with Clerk and RBAC.",
      "Code execution engine supporting multiple languages.",
      "Interview dashboard with analytics and notifications.",
      "Background jobs using Inngest for scalable workflows.",
      "TanStack Query caching for better performance.",
    ],

    challenges: [
      {
        title: "Collaboration",
        text: "Built synchronized collaborative editing and live communication for multiple participants.",
      },
      {
        title: "Background Processing",
        text: "Used Inngest to handle asynchronous workflows and user synchronization.",
      },
      {
        title: "Scalability",
        text: "Designed reusable REST APIs and optimized client-side caching with TanStack Query.",
      },
    ],

    github: "https://github.com/SaptarshiCodes/Coding-platform",

    live: "https://coding-platform-jet-two.vercel.app/",

    accent: "#3B82F6",
  },
];
