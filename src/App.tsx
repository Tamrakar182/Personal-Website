import HomePage from './page';
import Providers from './components/Providers';
import { Route, Routes, HashRouter } from 'react-router';
import ProjectPage from './page/project';

function App() {
  return (
    <Providers>
      <HashRouter>
        <Routes>
          <Route
            index
            element={
              <div className='min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6'>
                <HomePage />
              </div>
            }
          />
          <Route path='projects' element={<ProjectPage />} />
        </Routes>
      </HashRouter>
    </Providers>
  );
}

export default App;
