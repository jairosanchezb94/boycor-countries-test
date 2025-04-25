
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getCountryByCode, getCountriesByCodes } from '../services/api';
import { Country } from '../types';

const CountryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (!id) return;
      
      setIsLoading(true);
      const countryData = await getCountryByCode(id);
      setCountry(countryData);

      if (countryData?.borders && countryData.borders.length > 0) {
        const borderData = await getCountriesByCodes(countryData.borders);
        setBorderCountries(borderData);
      } else {
        setBorderCountries([]);
      }
      
      setIsLoading(false);
    };

    fetchCountryData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-8 md:px-6">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-8 md:px-6">
        <p className="text-lg">Country not found</p>
      </div>
    );
  }

  // Get native name (first available)
  const nativeNameKey = Object.keys(country.name.nativeName || {})[0];
  const nativeName = nativeNameKey 
    ? country.name.nativeName[nativeNameKey].common
    : country.name.common;

  // Get currencies (comma separated)
  const currencies = country.currencies 
    ? Object.values(country.currencies).map(currency => currency.name).join(', ')
    : '';

  // Get languages (comma separated)
  const languages = country.languages 
    ? Object.values(country.languages).join(', ')
    : '';

  // Get top level domain
  const tld = country.tld && country.tld.length > 0 ? country.tld[0] : '';

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 md:py-16">
      <Link 
        to="/" 
        className="mb-16 inline-flex items-center gap-2 rounded-md bg-element px-8 py-2 shadow-md transition-colors hover:bg-element/90"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img 
            src={country.flags.svg} 
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 className="mb-8 text-3xl font-extrabold">{country.name.common}</h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <p><span className="font-semibold">Native Name:</span> {nativeName}</p>
              <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion || 'N/A'}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
            </div>

            <div className="space-y-2">
              <p><span className="font-semibold">Top Level Domain:</span> {tld || 'N/A'}</p>
              <p><span className="font-semibold">Currencies:</span> {currencies || 'N/A'}</p>
              <p><span className="font-semibold">Languages:</span> {languages || 'N/A'}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 font-semibold">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <Link
                    key={border.cca3}
                    to={`/country/${border.cca3}`}
                    className="rounded bg-element px-6 py-1 text-sm shadow-sm transition-colors hover:bg-element/90"
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
