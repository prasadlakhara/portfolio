import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  elinsys,
  arth,
  dv,
  threejs,
  askai,
  hrbingo,
  threebears,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "React Js Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Elinsys",
    icon: elinsys,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Spearheading UI/UX design initiatives, ensuring seamless interactions and visually appealing interfaces.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Crafting wireframes, prototypes, and high-fidelity designs that balance aesthetics and functionality.",
    ],
  },
  {
    title: "Python Developer Intern",
    company_name: "Arth Infosoft",
    icon: arth,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Developed and launched a functional Python Django web application.",
      "Collaborated on database mapping and backend development.",
      "Created custom controls and ensured seamless user experiences.",
    ],
  },
  {
    title: "Graphics & UI Designer",
    company_name: "Digital Vakil",
    icon: dv,
    iconBg: "#383E56",
    date: "Sep 2020 - Nov 2020",
    points: [
      "Produced captivating website layouts, marketing collateral, logos, and animations for an online legal service provider.",
      "Orchestrated SEO strategies to elevate the company's online presence and visibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prasad proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Prasad does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Prasad optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HRMS Mobile App",
    description:
      "This HRMS app simplifies HR tasks, including attendance tracking, leave management, holiday monitoring, employee data maintenance, and real-time clock-in/out.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "uidesign",
        color: "green-text-gradient",
      },
      {
        name: "mobileapp",
        color: "pink-text-gradient",
      },
    ],
    image: hrbingo,
    source_code_link: "https://www.behance.net/prasadlakhara",
  },
  {
    name: "ThreeBears",
    description:
      "USA-based Ecommerce platform, where you'll find a curated selection of local town essentials and global treasures, all in one convenient online store.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "ps",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "pink-text-gradient",
      },
    ],
    image: threebears,
    source_code_link:
      "https://www.behance.net/gallery/179035505/Dropshipping-Service-Website",
  },
  {
    name: "ASK | AI",
    description:
      "It ia a mobile app leveraging AI technology for engaging conversations, enabling users to interact seamlessly with AI. Just like ChatGPT.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt",
        color: "pink-text-gradient",
      },
    ],
    image: askai,
    source_code_link:
      "https://www.behance.net/gallery/179035999/Chatbot-Mobile-App-Ask-AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
