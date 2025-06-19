import InfiniteMenu from '@/blocks/Components/InfiniteMenu/InfiniteMenu';
const items = [
  {
    image: '/sites/phasezero.png',
    link: 'https://phasezeroclothing.com/',
    title: 'Phase Zero Clothing',
    description: 'Clothing E-commerce Site',
  },
  {
    image: '/sites/BefitNepal.png',
    link: 'https://play.google.com/store/apps/details?id=com.colthinkspace.befitnepal',
    title: 'Befit Nepal & Befit Partner',
    description: 'Gym Management App',
  },
  {
    image: '/sites/zentabdemo.png',
    link: 'https://zen-tab.pages.dev/',
    title: 'Zen Tab',
    description: 'Productivity Browser Extension',
  },
  {
    image: '/sites/packageforge.png',
    link: 'https://pkgs.pkgforge.dev/',
    title: 'Pkgforge Package Index',
    description: 'Index of Packages under Pkgforge',
  },
  {
    image: '/sites/collearn2.png',
    link: 'https://learn.colglobal.org/',
    title: 'COL Learn',
    description: 'Learning Management System',
  },
  {
    image: '/sites/notemark.png',
    link: 'https://github.com/Tamrakar182/note-mark',
    title: 'Note Mark',
    description: 'Desktop application for Note Taking',
  },
  {
    image: '/sites/metroidvania.png',
    link: 'https://tamrakar182.github.io/metroidvania/',
    title: 'Void Knight - Silktune',
    description: 'Metroidvania Game in Kaplay.js',
  },
];

function ProjectPage() {
  return (
    <div className='h-screen w-screen no-scrollbar overflow-clip relative inset'>
      <InfiniteMenu items={items} />
    </div>
  );
}

export default ProjectPage;
