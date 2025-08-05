import React from 'react';

const Skeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="flex gap-2">
          <div className="h-6 bg-gray-300 rounded-full w-16" />
          <div className="h-6 bg-gray-300 rounded-full w-12" />
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
