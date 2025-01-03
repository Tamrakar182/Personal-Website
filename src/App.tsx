import SplashScreen from './components/Splashscreen';
import { useState, useEffect } from 'react';
import HomePage from './page';
import Providers from './components/Providers';

function App() {
  const [splashLoaded, setSplashLoaded] = useState(false);

  useEffect(() => {
    const loaded = sessionStorage.getItem('splashLoaded');
    if (loaded) {
      setSplashLoaded(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setSplashLoaded(true);
  };

  if (!splashLoaded) {
    return (
      <div className='min-h-screen bg-[#08090a] flex items-center justify-center'>
        <SplashScreen onComplete={handleSplashComplete} />
      </div>
    );
  }

  return (
    <Providers>
      <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6'>
        <HomePage />
      </div>
    </Providers>
  );
}

export default App;
