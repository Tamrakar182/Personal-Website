import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Manjul Tamrakar',
  initials: 'MT',
  url: 'https://github.com/Tamrakar182',
  avatarUrl: 'https://avatars.githubusercontent.com/u/77426508?v=4',
  location: 'Lalitpur District, Nepal',
  locationLink: 'https://www.google.com/maps/place/lalitpur',
  description:
    'Student | Organising Team for GDG Kathmandu | Frontend Developer',
  summary:
    'As a BSc. CSIT student at Patan Multiple Campus, I am passionate about technology and eager to learn from experienced professionals. I have a solid foundation in computer science, including programming languages and software development, and I have obtained multiple certifications from Cisco and LinkedIn to enhance my skills and knowledge. Currently, I am working as a Data Science Fellow at Code for Nepal, where I apply my analytical and statistical skills to support various data-driven projects and initiatives.',
  skills: [
    'Solidity',
    'Blockchain',
    'Smart Contracts',
    'Frontend Development',
    'Data Science',
    'Event Management',
    'Project Management',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
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
      Devpost: {
        name: 'Devpost',
        url: 'https://devpost.com/Tamrakar182',
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'GDG Kathmandu',
      href: 'https://gdg.community.dev/gdg-kathmandu',
      badges: [],
      location: 'Kathmandu, Nepal',
      title: 'Comms Lead | Organising Team',
      start: 'August 2023',
      logoUrl: 'https://mindxcape.com/favicon.ico',
      end: 'Present',
      description:
        'Working in the organising team of GDG Kathmandu to smoothly run the operations and ensure event success and proper event execution.',
    },
    {
      company: 'mindxcape',
      href: '#',
      badges: [],
      logoUrl: 'https://mindxcape.com/favicon.ico',
      location: 'Nepal',
      title: 'Frontend Developer',
      start: 'July 2023',
      end: 'Present',
      description: 'Frontend Development and Implementation',
    },
    {
      company: 'eSatya',
      href: 'https://esatya.io',
      badges: [],
      logoUrl: 'https://mindxcape.com/favicon.ico',
      location: 'Nepal',
      title: 'Blockchain Fellow',
      start: 'March 2024',
      end: 'August 2024',
      description: 'Blockchain Development Fellowship Program',
    },
    {
      company: 'Code for Nepal',
      href: 'https://codefornepal.org',
      logoUrl: 'https://mindxcape.com/favicon.ico',
      badges: [],
      location: 'Nepal',
      title: 'Data Science Fellow',
      start: 'July 2023',
      end: 'February 2024',
      description:
        'Data Science Fellowship applying analytical and statistical skills to support various data-driven projects and initiatives.',
    },
  ],
  education: [
    {
      school: 'Patan Multiple Campus',
      logoUrl: 'https://pmc.edu.np/assets/images/logo.png',
      href: 'https://pmc.edu.np',
      degree: 'BSc. CSIT, Computer Science and Information Technology',
      start: '2022',
      end: '2026',
    },
    {
      school: 'Bluebird College',
      logoUrl: 'https://bluebirdcollege.edu.np/assets/images/logo.png',
      href: '#',
      degree: 'High School(+2), Science',
      start: '2019',
      end: '2021',
    },
    {
      school: 'Future Stars High School',
      href: '#',
      logoUrl: 'https://futurestars.edu.np/assets/images/logo.png',
      degree: 'School',
      start: '2007',
      end: '2019',
    },
  ],
  hackathons: [
    {
      title: 'AICrusade 2023 Winner',
      href: '#',
      location: 'Nepal',
      dates: '2023',
      active: false,
      description: 'Winner of Environment Track at AICrusade 2023',
      technologies: ['AI', 'Environmental Technology'],
      links: [],
    },
    {
      title: 'SXC Sandbox Hackfest',
      href: '#',
      dates: '2024',
      location: 'Nepal',
      active: false,
      description: 'Winner of SXC Sandbox Hackfest 2024',
      technologies: ['Blockchain', 'Web Development'],
      links: [],
    },
  ],
  projects: [
    {
      title: 'mindxcape',
      href: 'https://mindxcape.com',
      dates: '2023',
      description: 'Frontend Development and Implementation',
      technologies: ['React', 'Tailwind CSS'],
      links: [],
    },
    {
      title: 'eSatya',
      href: 'https://esatya.io',
      dates: '2024',
      description: 'Blockchain Development Fellowship Program',
      technologies: ['Solidity', 'Blockchain'],
      links: [],
    },
    {
      title: 'Code for Nepal',
      href: 'https://codefornepal.org',
      dates: '2023',
      description:
        'Data Science Fellowship applying analytical and statistical skills to support various data-driven projects and initiatives.',
      technologies: ['Data Science', 'Python'],
      links: [],
    },
  ],
} as const;
