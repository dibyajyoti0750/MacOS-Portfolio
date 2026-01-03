const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Coming soon...",
    title: "Clerk Webhooks and Inngest: A Complete Integration Guide",
    image: "/images/blog1.png",
    link: "google.com",
  },
  {
    id: 2,
    date: "Coming soon...",
    title: "State Management in React with Redux Toolkit for Beginners",
    image: "/images/blog2.png",
    link: "google.com",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Redux"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#F4656B",
    link: "https://github.com/dibyajyoti0750",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0046FF",
    link: "https://www.linkedin.com/in/dibyajyotipramanick/",
  },
  {
    id: 3,
    text: "Twitter / X",
    icon: "/icons/twitter.svg",
    bg: "#33A1E0",
    link: "https://x.com/developer_dj_",
  },
  {
    id: 4,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#F75270",
    link: "https://www.instagram.com/developer_dj/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "GlowUp - Social Media Web App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10", // icon position inside Finder
      windowPosition: "top-[5vh] left-8", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "GlowUp.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-10",
          description: [
            "GlowUp is a full stack social media web application built using the MERN stack, designed to help users connect, share, and grow together.",
            "Users can create profiles, share posts and stories, like and comment, and chat in real time.",
            "The platform focuses on a clean, responsive UI and smooth user experience across devices.",
            "The backend handles authentication, data storage, and APIs efficiently, while the frontend ensures fast and dynamic interactions.",
            "GlowUp showcases practical implementation of modern web technologies, scalable architecture, and real world features expected in a production ready social media application.",
          ],
        },
        {
          id: 2,
          name: "glowup.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://glow-up-social-media-app-prod-front.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "glowup.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-82",
          imageUrl: "/images/ss1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/docs.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-52 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ChadGPT - AI Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[18vh] left-8",
      children: [
        {
          id: 1,
          name: "ChadGPT.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "ChadGPT is a full stack ChatGPT inspired web application built using the MERN stack.",
            "It allows users to have real time, AI powered conversations through a clean and responsive interface.",
            "The project focuses on seamless user experience, fast responses, and scalable backend architecture.",
            "It includes features like user authentication, chat history management, and dynamic message rendering.",
            "The frontend is built with modern React practices, while the backend handles API communication, data storage, and request optimization.",
            "ChadGPT demonstrates my understanding of full stack development, API integration, state management, and building real world applications that combine usability with performance.",
          ],
        },
        {
          id: 2,
          name: "chadgpt.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chad-gpt-frontend-dj.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "chadgpt.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/ss5.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/docs.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Ascend - Learning Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[32vh] left-8",
      children: [
        {
          id: 1,
          name: "Ascend.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-35",
          description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam cumque omnis nam laborum dicta vel corrupti odio placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam cumque omnis nam laborum dicta vel corrupti odio placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam cumque omnis nam laborum dicta vel corrupti odio placeat!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam cumque omnis nam laborum dicta vel corrupti odio placeat!",
          ],
        },
        {
          id: 2,
          name: "ascend.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.google.com",
          position: "top-10 left-5",
        },
        {
          id: 4,
          name: "ascend.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 right-40",
          imageUrl: "https://placehold.co/600x400?text=Coming+Soon...",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/docs.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-10 right-12",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "broke-me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me-2.jpg",
    },
    {
      id: 3,
      name: "unemployed-me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpeg",
      description: [
        "Hey! I’m Dibyajyoti 👋 I enjoy building things for the web and understanding how everything fits together ⚙️",
        "I’m still learning, experimenting, breaking things, and slowly turning ideas into something real.",
        "I work across frontend and backend, polishing UI some days and handling APIs or logic on others.",
        "I’m not an expert yet, just someone who enjoys learning new tools and improving step by step 🤓",
        "Right now, my focus is building projects that work well, load fast, and feel good to use.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-10 left-10",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
