import React from 'react';

const SatelliteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="h-16 w-16 text-gray-900" // Adjust size and color using Tailwind classes
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="30" stroke="none" />
        <rect x="27" y="27" width="10" height="10" fill="currentColor" />
        <line x1="32" y1="0" x2="32" y2="10" />
        <line x1="32" y1="64" x2="32" y2="54" />
        <line x1="0" y1="32" x2="10" y2="32" />
        <line x1="64" y1="32" x2="54" y2="32" />
        <line x1="18" y1="18" x2="8" y2="8" />
        <line x1="46" y1="18" x2="56" y2="8" />
        <line x1="18" y1="46" x2="8" y2="56" />
        <line x1="46" y1="46" x2="56" y2="56" />
      </g>
    </svg>
  );
};

export default SatelliteIcon;