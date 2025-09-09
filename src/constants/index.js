import {
  frontend,
  backend,
  mobile,
  web,
  javascript,
  mongodb,
  html,
  css,
  python,
  csharp,
  java,
  kotlin,
  retrofit,
  git,
  fastapi,
  ubuntu,
  docker,
  postgresql,
  booking,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Mobile Development',
    icon: mobile, 
  },
  {
    title: 'Web Development',
    icon: web, 
  },
];

const technologies = [
   {
    name: 'Python',
    icon: python,
  },
  {
    name: 'C Sharp',
    icon: csharp,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Fast API',
    icon: fastapi,
  },
  {
    name: 'Retrofit',
    icon: retrofit,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Ubuntu',
    icon: ubuntu,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-booking',
    name: 'Booking App',
    description: `Developed a full-featured Android app for booking and managing accommodations. 
    The app allows users to plan trips, manage bookings, and access trip details seamlessly.

    Architecture: Three-tier system with Android client, FastAPI server, and a normalized relational database (MySQL via SQLAlchemy).

    Security: Implements authentication and secure session management with cookies.

    API Integration: Uses RESTful APIs and HTTPS requests for communication between client and server.

    Future Plans: Expanding functionality with a custom AI agent for smarter trip planning, including recommendations for transport, museums, and other attractions.`,
    tags: [
      { name: 'kotlin',     color: 'blue-text-gradient' },
      { name: 'fastapi',    color: 'green-text-gradient' },
      { name: 'mysql',      color: 'pink-text-gradient' },
    ],
    image: booking,  // import your screenshot in assets/index.js
    repo: 'https://github.com/alevchenko12/BookingApp',
    demo: '', // leave empty if no live demo yet
  },
];


export { services, technologies, experiences, projects };
