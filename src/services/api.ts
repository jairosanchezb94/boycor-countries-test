
import { Country } from '../types';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    if (!response.ok) {
      throw new Error('Error fetching countries');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch countries:', error);
    return [];
  }
};

export const getCountryByCode = async (code: string): Promise<Country | null> => {
  try {
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    if (!response.ok) {
      throw new Error('Error fetching country');
    }
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error(`Failed to fetch country with code ${code}:`, error);
    return null;
  }
};

export const getCountriesByCodes = async (codes: string[]): Promise<Country[]> => {
  if (!codes.length) return [];
  
  try {
    const codesParam = codes.join(',');
    const response = await fetch(`${BASE_URL}/alpha?codes=${codesParam}`);
    if (!response.ok) {
      throw new Error('Error fetching countries by codes');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch countries by codes:', error);
    return [];
  }
};
