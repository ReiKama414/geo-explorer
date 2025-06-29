import React from 'react';
import { Compass } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg">
          <Compass className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-slate-700 bg-clip-text text-transparent">
          Geo Explorer
        </h1>
      </div>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Discover your geographic location and explore detailed country information in real-time
      </p>
    </div>
  );
};