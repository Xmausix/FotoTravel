// src/components/shared/MapDisplayWrapper.tsx
"use client"; // Dyrektywa oznaczająca komponent kliencki

import React from 'react';
import dynamic from 'next/dynamic';
// Importujemy typ propsów dla InteractiveMap. Jest on również używany przez ten komponent-wrapper.
import type { InteractiveMapProps } from '@/components/shared/InteractiveMap';

// Komponent InteractiveMap jest ładowany dynamicznie.
// Jest to konieczne, ponieważ biblioteka Leaflet (na której bazuje InteractiveMap)
// działa wyłącznie po stronie klienta.
// Opcja `ssr: false` zapobiega próbie renderowania tego komponentu na serwerze.
// Funkcja `loading` dostarcza tymczasowy interfejs użytkownika (np. komunikat ".")
// na czas ładowania właściwego komponentu mapy.
const DynamicallyLoadedInteractiveMap = dynamic(
    () => import('@/components/shared/InteractiveMap'), // To jest funkcja ładująca, która mówi Next.js, JAKI moduł załadować dynamicznie.
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

// MapDisplayWrapper to komponent kliencki, który "opakowuje"
// dynamicz