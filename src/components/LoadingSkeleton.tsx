import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  height?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  height = 'h-4' 
}) => {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%] rounded ${height} ${className}`} 
         style={{
           animation: 'shimmer 2s infinite linear'
         }}>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};