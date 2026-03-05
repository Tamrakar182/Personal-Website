import InfiniteMenu from '@/blocks/Components/InfiniteMenu/InfiniteMenu';
const items = [
  {
    image: '/sites/phasezero.png',
    link: 'https://phasezeroclothing.com/',
    title: 'Phase Zero Clothing',
    description: 'E-commerce Website',
  },
  {
    image: '/sites/BefitNepal.png',
    link: 'https://play.google.com/store/apps/details?id=com.colthinkspace.befitnepal',
    title: 'Befit Nepal & Befit Partner',
    description: 'Mobile Application',
  },
  {
    image: '/sites/collearn2.png',
    link: 'https://learn.colglobal.org/',
    title: 'COL Learn',
    description: 'Learning Management System',
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
