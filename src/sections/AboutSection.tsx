import BlurFade from '@/components/ui/blur-fade';
import { BLUR_FADE_DELAY } from '@/constants';
import { DATA } from '@/data/resume';

function AboutSection() {
  return (
    <section id='about'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className='text-xl font-bold'>About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <p className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
          {DATA.summary}
        </p>
      </BlurFade>
    </section>
  );
}

export default AboutSection;
