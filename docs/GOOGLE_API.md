# Google Places API Integration Documentation

## Overview
This document details the implementation of Google Places API integration for address validation and postcode search in the PreBookFlow component, with a focus on Australia-wide coverage.

## API Configuration

### Required Dependencies
```json
{
  "dependencies": {
    "@types/google.maps": "^3.58.1"
  }
}
```

### Required APIs
1. Places API (New)
2. Geocoding API
3. Maps JavaScript API

### Script Setup
```html
<Script
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
  strategy="afterInteractive"
/>
```

## Implementation Architecture

### 1. Google Places Hook
```typescript
const { 
  autocompleteService, 
  placesService, 
  geocoder, 
  bounds 
} = useGooglePlaces();
```

### 2. Core Services
- **AutocompleteService**: For address suggestions
- **PlacesService**: For detailed place information
- **Geocoder**: For postcode area searches
- **Bounds**: For geolocation-based results

### 3. Search Types
- **Postcode Search**: Uses Geocoding API with locality search
- **Address Search**: Uses Places Autocomplete API

## Key Features

### 1. Geolocation Support
- Automatically detects user location
- Creates relevant search bounds
- Falls back to Australia-wide bounds

### 2. Postcode Search Logic
```typescript
const isPostcode = /^\d{4}$/.test(value);
if (isPostcode) {
  // Use Geocoder to get postcode area
  // Search for localities within bounds
} else {
  // Regular address search
}
```

### 3. Session Token Management
```typescript
const sessionToken = new google.maps.places.AutocompleteSessionToken();
```

## Best Practices

### 1. Performance Optimization
- Debouncing (300ms)
- Session token management
- Geolocation caching
- Proper cleanup

### 2. Error Handling
```typescript
try {
  const results = await fetchSuggestions();
  // Process results
} catch (error) {
  console.error('Error:', error);
  setSuggestions([]);
}
```

### 3. User Experience
- Keyboard navigation
- Loading states
- Error messages
- Clear feedback

## Implementation Example

### Address Validation Component
```typescript
export function AddressValidation({ 
  value, 
  onSelect, 
  onChange, 
  isInputFocused 
}: AddressValidationProps) {
  // Services initialization
  const { 
    autocompleteService, 
    placesService, 
    geocoder, 
    bounds 
  } = useGooglePlaces();

  // Fetch suggestions based on input
  const fetchSuggestions = async () => {
    if (isPostcode) {
      return fetchPostcodeSuggestions(value);
    }
    return fetchAddressSuggestions(value);
  };
}
```

## Configuration Requirements

### 1. API Key Setup
- Enable required APIs
- Set usage quotas
- Configure API restrictions

### 2. Environment Variables
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

### 3. TypeScript Configuration
```json
{
  "compilerOptions": {
    "types": ["@types/google.maps"]
  }
}
```

## Testing Guidelines

### 1. Test Cases
```typescript
// Postcode Tests
test('2166 returns multiple suburbs');
test('Invalid postcode handling');

// Address Tests
test('Partial address suggestions');
test('Full address validation');
```

### 2. Edge Cases
- Network failures
- API limits
- Invalid inputs
- Geolocation errors

## Troubleshooting

### Common Issues
1. "Invalid Request" errors
   - Check API key configuration
   - Verify request parameters

2. No results
   - Check bounds configuration
   - Verify search types
   - Check input formatting

3. Limited results
   - Review search parameters
   - Check bounds restrictions
   - Verify API quotas

### Solutions
1. Enable console logging
2. Verify API key permissions
3. Check network requests
4. Review bounds settings

## Future Improvements

### 1. Enhanced Search
- Improved locality detection
- Better postcode area coverage
- Smarter results ranking

### 2. Performance
- Result caching
- Optimized bounds
- Reduced API calls

### 3. User Experience
- Better error handling
- Improved suggestions
- Faster response times

## Security Considerations

### 1. API Key Protection
- Restrict key usage
- Monitor API quotas
- Implement rate limiting

### 2. Data Handling
- Validate user input
- Sanitize responses
- Secure storage

## Support Resources

1. [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
2. [Geocoding API Guide](https://developers.google.com/maps/documentation/geocoding/overview)
3. [Maps JavaScript API Reference](https://developers.google.com/maps/documentation/javascript/reference)