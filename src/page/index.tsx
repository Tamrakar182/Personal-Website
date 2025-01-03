import HeroSection from '@/sections/HeroSection';
import ContactSection from '@/sections/ContactSection';
import HackathonSection from '@/sections/HackathonSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import WorkSection from '@/sections/WorkSection';
import AboutSection from '@/sections/AboutSection';

function HomePage() {
  return (
    <main className='custom-cursor flex flex-col min-h-[100dvh] space-y-10'>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
