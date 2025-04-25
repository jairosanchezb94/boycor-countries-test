
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-element shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-xl font-extrabold md:text-2xl">
          Where in the world?
        </Link>
        
        <button 
          onClick={toggleTheme} 
          className="flex items-center gap-2 font-semibold"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <>
              <Moon className="h-5 w-5" />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="h-5 w-5" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
