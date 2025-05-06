// src/components/shared/InteractiveMap.tsx
"use client";

import React, { useEffect }_from_ 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } _from_ 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L _from_ 'leaflet';

// Poprawka dla domyślnej ikony znacznika Leaflet w projektach z Webpack/Next.js
// Upewnij się, że ścieżki do obrazów są poprawne w Twoim projekcie,
// lub rozważ użycie niestandardowej ikony.
// Next.js może wymagać specjalnego traktowania zasobów statycznych.
// Poniższy import może wymagać dostosowania w zależności od konfiguracji Next.js i public folder.
// Jeśli obrazy są w public/images, ścieżki będą np. '/images/marker-icon.png'
// Dla uproszczenia, można też użyć CDN dla ikon lub skonfigurować aliasy.

// Prosta konfiguracja domyślnej ikony (może wymagać dostosowania)
// Jeśli masz problemy z ikonami, rozważ skopiowanie obrazów marker-icon.png, marker-icon-2x.png, marker-shadow.png
// do folderu `public` i dostosowanie ścieżek.
// Alternatywnie, można użyć biblioteki `leaflet-defaulticon-compatibility`.

// Rozwiązanie problemu z ikonami w Next.js (często spotykane)
if (typeof window !== 'undefined') {
    // Usuwamy potencjalnie błędnie ustawioną ścieżkę przez Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default.src,
        iconUrl: require('leaflet/dist/images/marker-icon.png').default.src,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png').default.src,
    });
}


export interface InteractiveMapProps {
    lat: number;
    lng: number;
    zoom?: number;
    markerText?: string;
    className?: string; // Opcjonalna klasa dla kontenera mapy
}

// Komponent pomocniczy do aktualizacji widoku mapy przy zmianie propsów
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
                                                           zoom = 13, // Domyślny zoom, jeśli nie zostanie podany
                                                           markerText,
                                                           className
                                                       }) => {
    // Leaflet działa tylko w przeglądarce.
    // "use client" i dynamic import z ssr: false powinny to załatwić,
    // ale dodatkowe zabezpieczenie nie zaszkodzi.
    if (typeof window === 'undefined') {
        return <div className={className || "w-full h-64 bg-muted flex items-center justify-center"}><p>Ładowanie mapy...</p></div>;
    }

    return (
        <MapContainer
            center={[lat, lng]}
            zoom={zoom}
            scrollWheelZoom={true} // Możesz ustawić na false, jeśli preferujesz
            className={className || "w-full h-full"} // Domyślne klasy, jeśli nie podano
            style={{ height: '100%', width: '100%' }} // Upewnij się, że kontener ma wymiary
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                {markerText && <Popup>{markerText}</Popup>}
            </Marker>
            {/* Aktualizuje widok mapy, gdy zmieniają się współrzędne lub zoom */}
            <MapViewUpdater lat={lat} lng={lng} zoom={zoom} />
        </MapContainer>
    );
};

export default InteractiveMap;