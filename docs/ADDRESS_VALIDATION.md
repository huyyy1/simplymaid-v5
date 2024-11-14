# Address Validation Implementation

## Overview
The address validation system integrates Google Places API with Aceternity UI's PlaceholdersAndVanishInput component to provide real-time address suggestions for Australian addresses.

## Core Components

### 1. AddressValidation Component
```typescript
interface AddressValidationProps {
  value: string;
  onSelect: (address: string) => void;
}
```

Key Features:
- Real-time address suggestions
- Postcode/suburb validation
- Australia-specific filtering
- Animated suggestion dropdown

### 2. Google Places Hook
```typescript
function useGooglePlaces() {
  return {
    autocompleteService: google.maps.places.AutocompleteService,
    placesService: google.maps.places.PlacesService
  }
}
```

## Setup Requirements

1. Environment Variables
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

2. Google Maps Script
```tsx
<Script
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
  strategy="afterInteractive"
/>
```

3. Dependencies
```json
{
  "@types/google.maps": "^3.58.1"
}
```

## Implementation Details

### Address Validation Logic

1. Postcode Detection
```typescript
const isPostcode = /^\d{4}$/.test(value);
```

2. API Request Configuration
```typescript
const request: google.maps.places.AutocompletionRequest = {
  input: value,
  componentRestrictions: { country: "au" },
  types: isPostcode ? ["(regions)"] : ["address"]
};
```

3. Suggestion Processing
```typescript
interface Suggestion {
  description: string;
  placeId: string;
  postcode?: string;
  suburb?: string;
}
```

### Integration with PreBookFlow

1. Contact Flow Step
```typescript
{
  field: "location",
  heading: "Where do you need the clean?",
  subtext: "Postcode or full address—either works!",
  placeholder: "👉 Enter your postcode or address…",
  validate: (value: string) => {
    if (!value) return "Please enter your location";
    return null;
  }
}
```

2. Validation Integration
```typescript
{currentStep.field === "location" && (
  <AddressValidation
    value={formData.location}
    onSelect={(address) => {
      setFormData(prev => ({ ...prev, location: address }));
      handleContactSubmit(address);
    }}
  />
)}
```

## Performance Optimizations

1. Debouncing
```typescript
const timer = setTimeout(() => {
  // API call logic
}, 300);
```

2. Service Initialization
```typescript
useEffect(() => {
  if (window.google?.maps?.places) {
    initServices();
  } else {
    const checkGoogleMapsInterval = setInterval(() => {
      if (window.google?.maps?.places) {
        initServices();
        clearInterval(checkGoogleMapsInterval);
      }
    }, 100);
  }
}, []);
```

## UI/UX Considerations

1. Suggestion Display
```tsx
<Card className="p-2 shadow-lg">
  {suggestions.map((suggestion) => (
    <motion.button
      className="w-full px-4 py-2 text-left hover:bg-accent rounded-md"
      onClick={() => onSelect(suggestion.description)}
    >
      <MapPin className="w-4 h-4 text-muted-foreground" />
      <span className="truncate">{suggestion.description}</span>
    </motion.button>
  ))}
</Card>
```

2. Animations
```tsx
<AnimatePresence>
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
  >
    {/* Suggestion content */}
  </motion.div>
</AnimatePresence>
```

## Error Handling

1. Service Initialization
```typescript
try {
  const autoService = new window.google.maps.places.AutocompleteService();
  setAutocompleteService(autoService);
} catch (error) {
  console.error('Error initializing Google Places services:', error);
}
```

2. API Response
```typescript
if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
  // Process predictions
} else {
  setSuggestions([]);
}
```

## Testing Guidelines

1. Input Validation
- Test postcode format (4 digits)
- Test partial address input
- Test empty input handling

2. API Integration
- Verify API key configuration
- Test service initialization
- Monitor API rate limits

3. UI Behavior
- Verify suggestion display
- Test selection handling
- Verify animation transitions

## Maintenance Notes

1. API Key Management
- Rotate keys periodically
- Monitor usage limits
- Implement rate limiting

2. Error Monitoring
- Track API failures
- Monitor service initialization
- Log user interactions

3. Performance Monitoring
- Track API response times
- Monitor suggestion render performance
- Track user interaction patterns

## Future Improvements

1. Enhanced Validation
- Add suburb validation
- Implement address verification
- Add postal code validation

2. UX Enhancements
- Add loading states
- Improve error messaging
- Add keyboard navigation

3. Performance
- Implement caching
- Optimize API calls
- Add offline support

## Security Considerations

1. API Key Protection
- Use environment variables
- Implement API key restrictions
- Monitor for unauthorized usage

2. Data Handling
- Sanitize user input
- Validate API responses
- Secure data transmission

## Browser Support

1. Modern Browsers
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

2. Fallbacks
- Graceful degradation
- Error messaging
- Alternative input methods

## Dependencies

1. Required
- @types/google.maps
- framer-motion
- Aceternity UI components

2. Optional
- Error tracking
- Analytics
- Monitoring tools

## Integration Checklist

1. Setup
- [ ] API key configuration
- [ ] Script loading
- [ ] Type definitions

2. Implementation
- [ ] Component integration
- [ ] Validation rules
- [ ] Error handling

3. Testing
- [ ] Input validation
- [ ] API integration
- [ ] UI behavior

4. Deployment
- [ ] Environment variables
- [ ] Build configuration
- [ ] Performance monitoring

## Support and Resources

1. Documentation
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Aceternity UI](https://ui.aceternity.com)
- Internal component docs

2. Support Channels
- Technical support
- API support
- Community forums

This documentation should be updated as the implementation evolves.