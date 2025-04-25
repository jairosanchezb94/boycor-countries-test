
import { Country } from '../types';
import { Link } from 'react-router-dom';

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link 
      to={`/country/${country.cca3}`}
      className="block overflow-hidden rounded-md bg-element shadow-md transition-transform hover:scale-105"
    >
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img 
          src={country.flags.svg} 
          alt={country.flags.alt || `Flag of ${country.name.common}`} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="p-6 pb-10">
        <h2 className="mb-4 text-lg font-extrabold">{country.name.common}</h2>
        
        <div className="space-y-1">
          <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
