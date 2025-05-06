/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves location information for a given address using Nominatim API.
 *
 * @param address The address to retrieve location data for.
 * @returns A promise that resolves to a Location object containing latitude and longitude.
 * @throws Error if the address is empty, geocoding fails, or the address is not found.
 */
export async function getLocation(address: string): Promise<Location> {
  if (!address || address.trim() === "") {
    // This specific throw will also be caught by the catch block below
    // and wrapped, which is consistent with the function's error handling strategy.
    throw new Error("Address cannot be empty.");
  }

  const encodedAddress = encodeURIComponent(address);
  // Using Nominatim API from OpenStreetMap.
  // Remember to adhere to their usage policy: https://operations.osmfoundation.org/policies/nominatim/
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        // It's good practice to set a custom User-Agent for API requests.
        // Replace with your application's details.
        'User-Agent': 'FotoTravelApp/1.0 (kontakt@twojadomena.com)' // Consider making this configurable or more generic
      }
    });

    if (!response.ok) {
      throw new Error(`Geocoding API request failed with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json(); // Can throw if JSON is invalid

    if (data && data.length > 0) {
      const firstResult = data[0];
      const lat = parseFloat(firstResult.lat);
      const lng = parseFloat(firstResult.lon); // Nominatim uses 'lon' for longitude

      if (isNaN(lat) || isNaN(lng)) {
        throw new Error(`Invalid coordinate data received from geocoding API for address: ${address}`);
      }

      return {
        lat: lat,
        lng: lng
      };
    } else {
      throw new Error(`Address not found or no results from geocoding API: ${address}`);
    }
  } catch (error) {
    console.error(`Error fetching location for address "${address}":`, error);

    let wrappedError: Error;
    if (error instanceof Error) {
      // Create a new error that wraps the original error's message
      wrappedError = new Error(`Failed to get location for address "${address}". Reason: ${error.message}`);
      // If the environment supports it (ES2022+), set the 'cause' property
      // for better stack traces and error inspection.
      if ('cause' in wrappedError) {
        (wrappedError as any).cause = error;
      }
    } else {
      // Handle cases where the caught 'error' is not an Error instance
      wrappedError = new Error(`An unknown error occurred while fetching location for address "${address}".`);
      if ('cause' in wrappedError) {
        (wrappedError as any).cause = error;
      }
    }
    throw wrappedError;
  }
}