import L from 'leaflet';

export async function initMap(location: string, mapContainerId: string) {
    const map = L.map(mapContainerId).setView([0, 0], 13);

    // OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Use OpenStreetMap Nominatim API to geocode
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.length) {
        const { lat, lon } = data[0];
        map.setView([lat, lon], 13);
        L.marker([lat, lon]).addTo(map)
            .bindPopup(location)
            .openPopup();
    } else {
        alert("Nie znaleziono lokalizacji: " + location);
    }
}
