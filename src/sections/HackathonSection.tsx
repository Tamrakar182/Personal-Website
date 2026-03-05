import { HackathonCard } from '@/components/HackathonCard';
import BlurFade from '@/components/ui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';

function HackathonSection() {
  return (
    <section id='hackathons'>
      <div className='space-y-12 w-full py-12'>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                Awards & Honors
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Recognition
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Selected achievements and competition wins from university and
                community events.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  //   image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}

export default HackathonSection;
