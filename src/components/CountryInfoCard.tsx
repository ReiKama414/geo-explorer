import React from 'react';
import { Info, MapPin, Clock, DollarSign, Languages } from 'lucide-react';
import { CountryData, GeoData } from '../types/geo';
import { LoadingSkeleton } from './LoadingSkeleton';

interface CountryInfoCardProps {
  countryData: CountryData | null;
  geoData: GeoData | null;
  loading: boolean;
}

export const CountryInfoCard: React.FC<CountryInfoCardProps> = ({ 
  countryData, 
  geoData, 
  loading 
}) => {
  const formatLanguages = (languages: { [key: string]: string } | undefined) => {
    if (!languages) return 'N/A';
    return Object.values(languages).join(', ');
  };

  const formatCurrency = (currencies: { [key: string]: { name: string; symbol: string } } | undefined) => {
    if (!currencies) return 'N/A';
    const currency = Object.values(currencies)[0];
    return `${currency.name} (${currency.symbol})`;
  };

  const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string | React.ReactNode; loading?: boolean }> = ({ 
    icon, 
    label, 
    value, 
    loading: itemLoading = false 
  }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
      <div className="p-2 bg-cyan-50 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
        {itemLoading ? (
          <LoadingSkeleton height="h-5" />
        ) : (
          <p className="text-slate-800 font-semibold break-words">{value}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
          <Info className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Country Information</h2>
      </div>
      
      <div className="space-y-2">
        <InfoRow
          icon={<MapPin className="w-5 h-5 text-cyan-600" />}
          label="Country"
          value={countryData?.name.common || 'Loading...'}
          loading={loading}
        />
        
        <InfoRow
          icon={<MapPin className="w-5 h-5 text-cyan-600" />}
          label="Capital"
          value={countryData?.capital?.[0] || 'N/A'}
          loading={loading}
        />
        
        <InfoRow
          icon={<Languages className="w-5 h-5 text-cyan-600" />}
          label="Languages"
          value={formatLanguages(countryData?.languages)}
          loading={loading}
        />
        
        <InfoRow
          icon={<DollarSign className="w-5 h-5 text-cyan-600" />}
          label="Currency"
          value={formatCurrency(countryData?.currencies)}
          loading={loading}
        />
        
        <InfoRow
          icon={<Clock className="w-5 h-5 text-cyan-600" />}
          label="Timezone"
          value={geoData?.timezone || 'Loading...'}
          loading={loading}
        />
        
        <InfoRow
          icon={<MapPin className="w-5 h-5 text-cyan-600" />}
          label="Coordinates"
          value={
            geoData ? (
              <span className="font-mono text-sm">
                {parseFloat(geoData.latitude).toFixed(2)}°, {parseFloat(geoData.longitude).toFixed(2)}°
              </span>
            ) : 'Loading...'
          }
          loading={loading}
        />
      </div>
    </div>
  );
};