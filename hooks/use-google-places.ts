"use client";

import { useEffect, useState } from "react";

export function useGooglePlaces() {
  const [autocompleteService, setAutocompleteService] = useState<google.maps.places.AutocompleteService | null>(null);
  const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initServices = () => {
      if (window.google?.maps?.places) {
        try {
          // Initialize AutocompleteService
          const autoService = new window.google.maps.places.AutocompleteService();
          setAutocompleteService(autoService);
          
          // Initialize PlacesService (requires a DOM element)
          const dummyElement = document.createElement('div');
          const placeService = new window.google.maps.places.PlacesService(dummyElement);
          setPlacesService(placeService);

          // Initialize Geocoder
          const geocoderService = new window.google.maps.Geocoder();
          setGeocoder(geocoderService);

          // Set default bounds for Australia
          const australiaBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(-43.00311, 113.6594), // SW corner
            new google.maps.LatLng(-10.6681, 153.61194)  // NE corner
          );
          setBounds(australiaBounds);

          // Try to get user's location for more accurate bounds
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                // Create bounds that cover roughly 100km around the user
                const userBounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(lat - 1, lng - 1),
                  new google.maps.LatLng(lat + 1, lng + 1)
                );
                setBounds(userBounds);
              },
              (error) => {
                console.log('Geolocation error:', error);
                // Keep default Australia bounds
              }
            );
          }

          setIsLoaded(true);
        } catch (error) {
          console.error('Error initializing Google Places services:', error);
        }
      }
    };

    // Check if Google Maps is already loaded
    if (window.google?.maps?.places) {
      initServices();
    } else {
      // Wait for Google Maps to load
      const checkGoogleMapsInterval = setInterval(() => {
        if (window.google?.maps?.places) {
          initServices();
          clearInterval(checkGoogleMapsInterval);
        }
      }, 100);

      // Clear interval after 10 seconds if Google Maps hasn't loaded
      setTimeout(() => clearInterval(checkGoogleMapsInterval), 10000);

      return () => clearInterval(checkGoogleMapsInterval);
    }
  }, []);

  return { autocompleteService, placesService, geocoder, bounds, isLoaded };
}