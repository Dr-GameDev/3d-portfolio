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
  threejs,
  appleproject,
  urbanshop,
  django,
  photoshop,
  illustrator,
  tak_hero,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
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
    name: "Django",
    icon: django,
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
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "Django Developer",
    company_name: "Client",
    icon: django,
    iconBg: "#fff",
    date: "March 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using Django, React.js and other related technologies.",
      "Played the role of a web designer, graphic design, web developer at the same time.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Client",
    icon: illustrator,
    iconBg: "#fff",
    date: "May 2024 - June 2024",
    points: [
      "Developed a brand along with its guidelines and code for usage.",
      "Logo, Typography, Colour, Branding psychology",
      "Implementing responsive design and ensuring cross-platform compatibility from small pins all the way to a billboard.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Client",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, Prisma and TypeScript.",
      "Embracing the various duties simultaneously and delivering work on time.",
      "Executing responsive design strategies and validating cross-platform compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We wanted a website that matched the beauty of our product, and Babalo delivered beyond our expectations.",
    name: "Ameer Lee",
    designation: "Manager",
    company: "Ameer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Babalo is the first web developer I've met who genuinely cares about our success. His dedication is unmatched.",
    name: "Taku Stolle",
    designation: "COO",
    company: "TB Services",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    testimonial:
      "Working with Babalo on our rebranding project was a game-changer. His creativity and attention to detail brought our vision to life in ways we couldn't have imagined.",
    name: "Athi Nathi",
    designation: "Founder",
    company: "Athi Designs",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];


const projects = [
  {
    name: "TB Services",
    description:
      "A full stack web application for an IT Solutions startup company. Landing page, contact forms, etc. Tech stack was django, react.js and tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tak_hero,
    source_code_link: "https://github.com/Dr-GameDev/React-Django-Fullstack-App",
  },
  {
    name: "Urbanshop e-commerce",
    description:
      "UrbanShop is a modern e-commerce website designed to sell urban lifestyle products, including clothing, accessories, and gadgets.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image: urbanshop,
    source_code_link: "https://github.com/Dr-GameDev/urbanshop",
  },
  {
    name: "iPhone Website Clone",
    description:
      "A website clone of Apple's iPhone 15 Pro with dynamic animations and interactions that demonstrates exceptional marketing and programming skills.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: appleproject,
    source_code_link: "https://github.com/Dr-GameDev/apple-website",
  },
];

export { services, technologies, experiences, testimonials, projects };