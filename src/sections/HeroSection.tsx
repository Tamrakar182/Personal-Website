import BlurFade from '@/components/ui/blur-fade';
import BlurFadeText from '@/components/ui/fade-text';
import { DATA } from '@/data/resume';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { BLUR_FADE_DELAY } from '@/constants';

function HeroSection() {
  return (
    <section id='hero'>
      <div className='mx-auto w-full max-w-2xl space-y-8'>
        <div className='gap-2 flex justify-between'>
          <div className='flex-col flex flex-1 space-y-1.5'>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
            />
            <BlurFadeText
              className='max-w-[600px] md:text-xl'
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className='size-28 border'>
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
