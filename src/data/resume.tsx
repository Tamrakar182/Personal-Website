import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Manjul Tamrakar',
  initials: 'MT',
  url: 'https://github.com/Tamrakar182',
  avatarUrl: 'https://avatars.githubusercontent.com/u/77426508?v=4',
  location: 'Tangal 12, Lalitpur, Nepal',
  locationLink: 'https://www.google.com/maps/place/lalitpur',
  description:
    'Computer Science student focused on web, API, and mobile development',
  summary:
    'Computer Science student with a passion for exploring the full spectrum of software development. Leveraging a strong foundation in TypeScript, I build dynamic web applications, RESTful APIs, and mobile applications.',
  skills: [
    'TypeScript',
    'JavaScript',
    'Go',
    'Kotlin',
    'Python',
    'C#',
    'C++',
    'React.js',
    'Next.js',
    'React Native',
    'Expo',
    'Jetpack Compose',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'NestJS',
    'Prisma',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '#/projects', icon: NotebookIcon, label: 'Projects' },
  ],
  contact: {
    email: 'manjultamrakar4@gmail.com',
    tel: '+9779841474281',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Tamrakar182',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/manjul-tamrakar',
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:manjultamrakar4@gmail.com',
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'Veel',
      href: 'https://www.veelapp.com/',
      badges: [],
      location: 'Nepal',
      title: 'Android Engineer',
      start: 'August 2025',
      logoUrl: 'https://veelapp.com/favicon.ico',
      end: 'Present',
      description:
        "Working on developing Veel's newest Android application using Kotlin, Jetpack Compose, and Native Android.",
    },
    {
      company: 'COL Thinkspace',
      href: 'https://colthinkspace.com/',
      badges: [],
      logoUrl: 'https://colthinkspace.com/favicon.ico',
      location: 'Nepal',
      title: 'Frontend Developer',
      start: 'June 2024',
      end: 'June 2025',
      description:
        'Developed their mobile application, led the creation of internal fullstack architecture, and led front-end development for the COL Learn website.',
    },
    {
      company: 'Mindxcape',
      href: '#',
      badges: [],
      logoUrl: 'https://mindxcape.com/favicon.ico',
      location: 'Nepal',
      title: 'Front End Developer',
      start: 'July 2023',
      end: 'June 2024',
      description:
        'Built the Phase Zero Clothing e-commerce site and internal management dashboards for Boss Adventure Travels and Tours using Next.js, Material UI, and Styled Components.',
    },
    {
      company: 'Google Developers Group Kathmandu',
      href: 'https://gdg.community.dev/gdg-kathmandu',
      logoUrl: 'https://mindxcape.com/favicon.ico',
      badges: [],
      location: 'Kathmandu, Nepal',
      title: 'Technical Lead, Organising Team',
      start: 'July 2023',
      end: 'Present',
      description:
        'Leading and organizing technical events including IO Extended Kathmandu and DevFest Kathmandu, with 10+ events and 800+ unique participants.',
    },
  ],
  education: [
    {
      school: 'Tribhuvan University (Patan Multiple Campus)',
      logoUrl: 'https://pmc.edu.np/assets/images/logo.png',
      href: 'https://pmc.edu.np',
      degree:
        'Bachelors in Computer Science and Information Technology (Average 80% across 7 semesters)',
      start: 'June 2022',
      end: 'June 2026 (Expected)',
    },
  ],
  hackathons: [
    {
      title: 'SXC Sandbox Hackfest 2024 — Winner',
      href: 'https://www.sxcsandbox.com/',
      location: 'Nepal',
      dates: 'January 2024',
      active: false,
      description:
        'Led a team to build an NFC payment platform using React Native and Firebase.',
      technologies: ['React Native', 'Firebase'],
      links: [],
    },
    {
      title: 'AI Crusade Hackathon 2023 — Winner (Environment Track)',
      href: 'https://aiclub.ku.edu.np/hackathon/',
      dates: 'August 2023',
      location: 'Nepal',
      active: false,
      description:
        'Developed a power grid failure prediction system using Django and Next.js.',
      technologies: ['Django', 'Next.js'],
      links: [],
    },
  ],
  projects: [
    {
      title: 'Befit Nepal & Befit Partner',
      href: 'https://play.google.com/store/apps/details?id=com.colthinkspace.befitnepal',
      dates: '2024',
      description:
        'Built attendance and expense management features and implemented Firebase Cloud Messaging (FCM) for push notifications.',
      technologies: ['Expo', 'FCM'],
      links: [],
    },
    {
      title: 'Phase Zero Clothing',
      href: 'https://phasezeroclothing.com/',
      dates: '2024',
      description:
        'Integrated eSewa and Khalti payment gateways and implemented authentication with NextAuth.',
      technologies: ['Next.js', 'Zustand', 'NextAuth'],
      links: [],
    },
    {
      title: 'COL Learn',
      href: 'https://learn.colglobal.org/',
      dates: '2025',
      description:
        'Learning management system with course creation and learner progress tracking for teachers and learners.',
      technologies: ['React.js', 'TanStack Query', 'React Router'],
      links: [],
    },
  ],
} as const;
