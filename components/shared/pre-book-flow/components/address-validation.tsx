"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { useGooglePlaces } from "@/hooks/use-google-places";
import { cn } from "@/lib/utils";
import Script from "next/script";

interface AddressValidationProps {
  value: string;
  onSelect: (address: string) => void;
  onChange: (value: string) => void;
  isInputFocused: boolean;
}

interface Suggestion {
  description: string;
  placeId: string;
  mainText?: string;
  secondaryText?: string;
}

export function AddressValidation({
  value,
  onSelect,
  onChange,
  isInputFocused,
}: AddressValidationProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const { autocompleteService, placesService, geocoder, bounds } = useGooglePlaces();
  const [sessionToken, setSessionToken] = useState<google.maps.places.AutocompleteSessionToken>();
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    if (window.google?.maps?.places && !sessionToken) {
      setSessionToken(new google.maps.places.AutocompleteSessionToken());
      setIsGoogleLoaded(true);
    }
  }, [sessionToken]);

  const fetchPostcodeSuggestions = useCallback(
    async (postcode: string) => {
      if (!geocoder || !placesService) return [];

      try {
        const geocodeResponse = await new Promise<google.maps.GeocoderResult[]>(
          (resolve, reject) => {
            geocoder.geocode(
              {
                address: `${postcode}, Australia`,
                componentRestrictions: { country: "au" },
              },
              (results, status) => {
                if (status === "OK") {
                  resolve(results);
                } else {
                  reject(status);
                }
              }
            );
          }
        );

        if (!geocodeResponse[0]?.geometry?.location) {
          return [];
        }

        const location = geocodeResponse[0].geometry.location;
        const postcodeBounds = new google.maps.LatLngBounds();
        if (geocodeResponse[0].geometry.viewport) {
          postcodeBounds.union(geocodeResponse[0].geometry.viewport);
        } else {
          const lat = location.lat();
          const lng = location.lng();
          postcodeBounds.extend(new google.maps.LatLng(lat - 0.2, lng - 0.2));
          postcodeBounds.extend(new google.maps.LatLng(lat + 0.2, lng + 0.2));
        }

        const placesResponse = await new Promise<google.maps.places.PlaceResult[]>(
          (resolve, reject) => {
            placesService.textSearch(
              {
                query: `suburbs in ${postcode}, Australia`,
                bounds: postcodeBounds,
                type: "locality",
              },
              (results, status) => {
                if (status === "OK") {
                  resolve(results);
                } else {
                  reject(status);
                }
              }
            );
          }
        );

        return placesResponse.map((place) => ({
          description: place.formatted_address || place.name || "",
          placeId: place.place_id || "",
          mainText: place.name || "",
          secondaryText: place.formatted_address?.split(",").slice(1).join(",").trim() || "",
        }));
      } catch (error) {
        console.error("Error fetching postcode suggestions:", error);
        return [];
      }
    },
    [geocoder, placesService]
  );

  const fetchSuggestions = useCallback(async () => {
    if (!value || value.length < 2 || !autocompleteService || !sessionToken || !isGoogleLoaded)
      return;

    const isPostcode = /^\d{4}$/.test(value);

    try {
      if (isPostcode) {
        const suburbs = await fetchPostcodeSuggestions(value);
        setSuggestions(suburbs);
        setHighlightedIndex(-1);
        return;
      }

      const predictions = await new Promise<google.maps.places.AutocompletePrediction[]>(
        (resolve, reject) => {
          autocompleteService.getPlacePredictions(
            {
              input: value,
              sessionToken,
              componentRestrictions: { country: "au" },
              types: ["address"],
              bounds: bounds || undefined,
            },
            (predictions, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                resolve(predictions);
              } else {
                resolve([]);
              }
            }
          );
        }
      );

      setSuggestions(
        predictions.map((prediction) => ({
          description: prediction.description,
          placeId: prediction.place_id,
          mainText: prediction.structured_formatting?.main_text,
          secondaryText: prediction.structured_formatting?.secondary_text,
        }))
      );
      setHighlightedIndex(-1);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  }, [value, autocompleteService, sessionToken, bounds, fetchPostcodeSuggestions, isGoogleLoaded]);

  useEffect(() => {
    if (!value || value.length < 2 || !isInputFocused || !isGoogleLoaded) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [value, isInputFocused, fetchSuggestions, isGoogleLoaded]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!suggestions.length || !isInputFocused) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0) {
            const selectedAddress = suggestions[highlightedIndex].description;
            onChange(selectedAddress);
            onSelect(selectedAddress);
            setSuggestions([]);
            setSessionToken(new google.maps.places.AutocompleteSessionToken());
          }
          break;
        case "Escape":
          setSuggestions([]);
          break;
      }
    },
    [suggestions, highlightedIndex, onSelect, onChange, isInputFocused]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSuggestionClick = useCallback(
    (suggestion: Suggestion) => {
      onChange(suggestion.description);
      onSelect(suggestion.description);
      setSuggestions([]);
      setSessionToken(new google.maps.places.AutocompleteSessionToken());
    },
    [onChange, onSelect]
  );

  if (!suggestions.length || !isInputFocused) return null;

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
        onLoad={() => setIsGoogleLoaded(true)}
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 right-0 top-full mt-2 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={suggestion.placeId}
                role="option"
                aria-selected={highlightedIndex === index}
                className={cn(
                  "w-full px-4 py-3 text-left hover:bg-accent rounded-md flex items-center gap-2",
                  highlightedIndex === index && "bg-accent"
                )}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="truncate">
                  {suggestion.mainText ? (
                    <>
                      <span className="font-medium">{suggestion.mainText}</span>
                      {suggestion.secondaryText && (
                        <span className="text-muted-foreground"> - {suggestion.secondaryText}</span>
                      )}
                    </>
                  ) : (
                    suggestion.description
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
