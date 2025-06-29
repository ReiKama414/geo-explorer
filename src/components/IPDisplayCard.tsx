import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { IPData, GeoData } from '../types/geo';
import { LoadingSkeleton } from './LoadingSkeleton';

interface IPDisplayCardProps {
  ipData: IPData | null;
  geoData: GeoData | null;
  loading: boolean;
}

export const IPDisplayCard: React.FC<IPDisplayCardProps> = ({ 
  ipData, 
  geoData, 
  loading 
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-cyan-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Your Location</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-600 mb-1 block">IP Address</label>
          {loading ? (
            <LoadingSkeleton height="h-6" />
          ) : (
            <p className="text-2xl font-mono font-bold text-cyan-600 bg-cyan-50 px-3 py-2 rounded-lg">
              {ipData?.ip || 'Loading...'}
            </p>
          )}
        </div>
        
        <div>
          <label className="text-sm font-medium text-slate-600 mb-1 block flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          {loading ? (
            <LoadingSkeleton height="h-6" />
          ) : (
            <p className="text-lg font-semibold text-slate-700">
              {geoData ? `${geoData.city}, ${geoData.country}` : 'Detecting...'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};