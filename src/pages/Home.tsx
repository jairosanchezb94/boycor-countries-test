
import { useEffect, useState, useCallback } from 'react';
import { getAllCountries } from '../services/api';
import { Country } from '../types';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import { useIsMobile } from '../hooks/use-mobile';
import { useInfiniteScroll } from '../hooks/use-infinite-scroll';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const data = await getAllCountries();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let results = countries;
    
    if (searchTerm) {
      results = results.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedRegion) {
      results = results.filter(country => 
        country.region === selectedRegion
      );
    }
    
    setFilteredCountries(results);
    setCurrentPage(1);
    
    if (isMobile) {
      setDisplayedCountries(results.slice(0, countriesPerPage));
    } else {
      const indexOfLastCountry = currentPage * countriesPerPage;
      const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
      setDisplayedCountries(results.slice(0, indexOfLastCountry));
    }
  }, [searchTerm, selectedRegion, countries, currentPage, isMobile]);

  const loadMore = useCallback(() => {
    if (isLoading) return;
    const nextBatch = filteredCountries.slice(0, displayedCountries.length + countriesPerPage);
    setDisplayedCountries(nextBatch);
  }, [filteredCountries, displayedCountries.length, isLoading]);

  useInfiniteScroll(loadMore, isLoading);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const getVisiblePageNumbers = () => {
    const delta = isMobile ? 1 : 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 md:py-12 min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-center backdrop-blur-sm bg-background/30 p-6 rounded-lg shadow-lg">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>

      {isLoading ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-48 bg-accent rounded"></div>
            <div className="h-4 w-36 bg-accent rounded"></div>
          </div>
        </div>
      ) : filteredCountries.length === 0 ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-lg bg-accent/10 p-6 rounded-lg shadow-inner">No countries found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedCountries.map((country) => (
              <div key={country.cca3} className="transform transition-all duration-300 hover:scale-105">
                <CountryCard country={country} />
              </div>
            ))}
          </div>

          {!isMobile && totalPages > 1 && (
            <div className="mt-12 mb-6">
              <Pagination>
                <PaginationContent className="no-wrap inline-flex w-auto justify-center gap-2 sm:gap-1">
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} transition-opacity duration-200`}
                    />
                  </PaginationItem>
                  
                  {getVisiblePageNumbers().map((number, index) => (
                    <PaginationItem key={index} className="mx-0.5">
                      {number === '...' ? (
                        <span className="flex h-8 w-8 items-center justify-center text-sm">...</span>
                      ) : (
                        <PaginationLink
                          onClick={() => setCurrentPage(number as number)}
                          isActive={currentPage === number}
                          className="h-8 w-8 p-0 text-sm transition-colors duration-200"
                        >
                          {number}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} transition-opacity duration-200`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          
          {isMobile && displayedCountries.length < filteredCountries.length && (
            <div className="mt-8 flex justify-center">
              <p className="text-sm text-muted-foreground animate-bounce">Scroll for more</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
