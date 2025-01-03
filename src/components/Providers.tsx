import { ThemeProvider } from '@/components/ThemeProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from './NavBar';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <TooltipProvider delayDuration={0}>
        {children}
        <Navbar />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default Providers;
