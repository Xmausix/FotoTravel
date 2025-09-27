import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  lat: number;
  lng: number;
  location: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, location }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // For now, we'll show a placeholder with coordinates
    // In production, you would integrate with Google Maps API
    const mapElement = mapRef.current;
    mapElement.innerHTML = `
      <div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
        <div class="text-center p-6">
          <div class="bg-blue-100 p-3 rounded-full inline-block mb-3">
            <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 mb-1">${location}</h4>
          <p class="text-gray-600 text-sm">Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}</p>
          <p class="text-xs text-gray-500 mt-2">Google Maps integration coming soon</p>
        </div>
      </div>
    `;
  }, [lat, lng, location]);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
};

export default GoogleMap;