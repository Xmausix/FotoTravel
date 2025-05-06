// src/components/shared/InteractiveMap.tsx
"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Poprawka dla domyślnej ikony znacznika Leaflet w Next.js
if (typeof window !== 'undefined') {
    // Usuwamy potencjalnie błędnie ustawioną ścieżkę przez Leaflet
    // To jest bezpieczne rzutowanie typu, aby uzyskać dostęp do prywatnego pola dla tego obejścia.
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
        // Ścieżki wskazują teraz na pliki w folderze public
        iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
        iconUrl: '/leaflet-images/marker-icon.png',
        shadowUrl: '/leaflet-images/marker-shadow.png',
    });
}

export interface InteractiveMapProps {
    lat: number;
    lng: number;
    zoom?: number;
    markerText?: string;
    className?: string;
}

const MapViewUpdater: React.FC<{ lat: number; lng: number; zoom: number }> = ({ lat, lng, zoom }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng], zoom);
    }, [lat, lng, zoom, map]);
    return null;
};

const InteractiveMap: React.FC<InteractiveMapProps> = ({
                                                           lat,
                                                           lng,
                                                           zoom = 13,
                                                           markerText,
                                                           className
                                                       }) => {
    if (typeof window === 'undefined') {
        return (
            <div className={className || "w-full h-64 bg-muted flex items-center justify-center"}>
                <p>Inicjalizacja mapy...</p>
            </div>
        );
    }

    return (
        <MapContainer
            center={[lat, lng]}
            zoom={zoom}
            scrollWheelZoom={true}
            className={className || "w-full h-full"}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                {markerText && <Popup>{markerText}</Popup>}
            </Marker>
            <MapViewUpdater lat={lat} lng={lng} zoom={zoom} />
        </MapContainer>
    );
};

export default InteractiveMap;