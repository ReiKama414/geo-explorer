import { useState, useEffect } from 'react';
import { IPData, GeoData, CountryData } from '../types/geo';

export const useGeoLocation = () => {
  const [ipData, setIPData] = useState<IPData | null>(null);
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Get user's IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipResult: IPData = await ipResponse.json();
        setIPData(ipResult);

        // Step 2: Get geographic data using IP
        const geoResponse = await fetch(`https://get.geojs.io/v1/ip/geo/${ipResult.ip}.json`);
        const geoResult: GeoData = await geoResponse.json();
        setGeoData(geoResult);

        // Step 3: Get country information
        if (geoResult.country_code) {
          const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${geoResult.country_code}`);
          const countryResult: CountryData[] = await countryResponse.json();
          if (countryResult && countryResult.length > 0) {
            setCountryData(countryResult[0]);
          }
        }
      } catch (err) {
        setError('Failed to fetch location data');
        console.error('Geo location error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  return { ipData, geoData, countryData, loading, error };
};