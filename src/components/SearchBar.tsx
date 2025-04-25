
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full rounded-md bg-element py-4 pl-12 pr-10 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-primary/20"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search countries"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 flex items-center pr-3 hover:opacity-70 transition-opacity"
          aria-label="Clear search"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
