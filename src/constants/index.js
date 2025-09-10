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
  uni,
  tablesearch,
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
    title: 'Software Engineering Student',
    company_name: 'Taras Shevchenko National University of Kyiv',
    icon: uni, 
    iconBg: '#333333',
    date: 'Sep 2022 – Jun 2026 (expected)',
  },
  {
    title: 'Web Developer (Summer Internship)',
    company_name: 'Table Search',
    icon: tablesearch, 
    iconBg: '#333333',
    date: 'Jun 2024 – Sep 2024',
  },
];


const projects = [
  {
    id: 'project-booking',
    name: 'Booking App',
    description: `A full-featured Android app for booking and managing accommodations. 
    Users can plan trips, manage bookings, and access details easily.

    • Architecture: Android client, FastAPI backend, SQL database
    • Security: Authentication & session management
    • APIs: RESTful endpoints over HTTPS
    • Next: AI-powered trip planning with recommendations`,
    tags: [
      { name: 'kotlin',     color: 'blue-text-gradient' },
      { name: 'retrofit',   color: 'purple-text-gradient' },
      { name: 'fastapi',    color: 'green-text-gradient' },
      { name: 'python',     color: 'yellow-text-gradient' },
      { name: 'mysql',      color: 'pink-text-gradient' },
      { name: 'auth-tokens', color: 'red-text-gradient' },
    ],
    image: booking,  
    repo: 'https://github.com/alevchenko12/BookingApp',
    demo: 'https://drive.google.com/file/d/1dQQSo9deq98-OzqT90xSg0VLEyHKnQqb/view?usp=sharing',
  },
];


export { services, technologies, experiences, projects };
