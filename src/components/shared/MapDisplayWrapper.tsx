// src/components/shared/MapDisplayWrapper.tsx
"use client"; // Dyrektywa oznaczająca komponent kliencki

import React from 'react';
import dynamic from 'next/dynamic';
// Importujemy typ propsów dla InteractiveMap. Jest on również używany przez ten komponent-wrapper.
import type { InteractiveMapProps } from '@/components/shared/InteractiveMap';


const DynamicallyLoadedInteractiveMap = dynamic(
    () => import('@/components/shared/InteractiveMap'), // POPRAWKA: Usunięto dodatkowe nawiasy wokół ścieżki importu
    // Sama funkcja `import()` w tym miejscu jest częścią mechanizmu dynamicznych importów.
    {
        ssr: false, // Kluczowe dla bibliotek klienckich jak Leaflet
        loading: () => (
            <div className="aspect-video bg-muted flex items-center justify-center rounded-lg overflow-hidden">
                <p>Ładowanie mapy...</p>
            </div>
        ),
    }
);

const MapDisplayWrapper: React.FC<InteractiveMapProps> = (props) => {
    return <DynamicallyLoadedInteractiveMap {...props} />;
};

export default MapDisplayWrapper;