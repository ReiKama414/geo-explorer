import React, { useState } from 'react';
import { Flag } from 'lucide-react';

interface CountryFlagProps {
  countryCode: string | undefined;
  countryName: string | undefined;
  loading: boolean;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ 
  countryCode, 
  countryName, 
  loading 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
            <Flag className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Country Flag</h2>
        </div>
        <div className="aspect-[3/2] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
          <Flag className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Country Flag</h2>
      </div>
      
      {countryCode && !imageError ? (
        <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            alt={`Flag of ${countryName}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
          )}
        </div>
      ) : (
        <div className="aspect-[3/2] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
          <Flag className="w-12 h-12 text-slate-400" />
        </div>
      )}
    </div>
  );
};