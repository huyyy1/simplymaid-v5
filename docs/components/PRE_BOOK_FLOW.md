# PreBookFlow Component Documentation

## Current Implementation Status

### ✅ Completed Features

1. **Address Validation**
   - Google Places API integration
   - Real-time address suggestions
   - Keyboard navigation (up/down/enter)
   - Mouse selection support
   - Input value updates on selection
   - Australian address format validation
   - Debounced API calls (300ms)

2. **Initial Service Selection**
   - Bedroom count selection (1-6)
   - Bathroom count selection (1-6)
   - Cleaning type selection
   - Animated button states
   - Form validation

3. **UI/UX**
   - Smooth transitions between steps
   - Loading states
   - Error handling
   - Keyboard accessibility
   - Mobile responsiveness

### 🚧 In Progress

1. **Contact Flow Integration**
   - Basic PlaceholdersAndVanishInput setup
   - Initial form state management
   - Step progression logic
   - Need to complete vanishing animation effect
   - Need to improve transition between steps

### ⏳ Pending Implementation

1. **Magic Link Generation**
   - Create unique identifier
   - Generate pre-filled URL
   - Add UTM parameters
   - Set expiration logic

2. **Marketing Integration**
   - Email template setup
   - SMS integration
   - Analytics tracking
   - Conversion monitoring

3. **Data Processing**
   - Form data validation
   - Error handling
   - API integration
   - Data persistence

4. **Booking Form Integration**
   - Pre-fill logic
   - State management
   - URL parameter handling
   - Session management

## Next Steps

### Priority 1: Complete Contact Flow
1. Implement proper PlaceholdersAndVanishInput animation
2. Add smooth transitions between form steps
3. Improve validation feedback
4. Add loading states

### Priority 2: Data Processing
1. Set up form data validation
2. Implement error handling
3. Add API integration
4. Create data persistence layer

### Priority 3: Marketing Features
1. Implement magic link generation
2. Set up email templates
3. Configure SMS integration
4. Add analytics tracking

## Component Architecture

```typescript
interface FormData {
  // Initial Service Data
  bedrooms: string;
  bathrooms: string;
  cleaningType: string;
  
  // Contact Information
  location: string;
  email: string;
  name: string;
  mobile: string;
}

interface ContactStep {
  field: keyof FormData;
  heading: string;
  subtext: string;
  placeholder: string;
  validate: (value: string) => string | null;
}
```

## Current Workflow

1. **Initial Service Selection**
   ```tsx
   <motion.button
     onClick={() => setFormData(prev => ({ 
       ...prev, 
       bedrooms: num.toString() 
     }))}
     className={cn(
       "relative flex items-center justify-center rounded-lg border h-12",
       formData.bedrooms === num.toString()
         ? "bg-[#FF4E8E] text-white"
         : "bg-white hover:bg-accent/50"
     )}
   >
     {num}
   </motion.button>
   ```

2. **Address Collection**
   ```tsx
   <AddressValidation
     value={formData.location}
     onSelect={handleAddressSelect}
     onChange={(value) => 
       setFormData(prev => ({ ...prev, location: value }))
     }
   />
   ```

3. **Contact Information**
   ```tsx
   <PlaceholdersAndVanishInput
     placeholders={[currentStep.placeholder]}
     onSubmit={handleContactSubmit}
     value={formData[currentStep.field]}
     onChange={(e) => 
       setFormData(prev => ({ 
         ...prev, 
         [currentStep.field]: e.target.value 
       }))
     }
   />
   ```

## Known Issues

1. **Address Validation**
   - Need to improve error handling for API failures
   - Add loading state during API calls
   - Improve mobile touch interaction

2. **Form Progression**
   - Vanishing animation needs refinement
   - Transition timing needs adjustment
   - Back navigation to be implemented

3. **Validation**
   - Add inline validation feedback
   - Improve error messages
   - Add field-specific validation rules

## Testing Requirements

### Unit Tests Needed
- Form validation logic
- Address validation integration
- Step progression
- Data persistence

### Integration Tests Needed
- Complete form flow
- API integration
- Error scenarios
- Cross-browser compatibility

### E2E Tests Needed
- Full user journey
- Mobile responsiveness
- Error handling
- Performance metrics

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "@googlemaps/js-api-loader": "^1.16.2",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## Environment Variables

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

## Performance Considerations

1. **API Calls**
   - Implement request caching
   - Optimize debounce timing
   - Add error retry logic

2. **Animations**
   - Reduce animation complexity
   - Optimize transition timing
   - Improve mobile performance

3. **Form State**
   - Implement efficient state updates
   - Optimize re-renders
   - Add state persistence

## Security Checklist

- [ ] Input sanitization
- [ ] API key protection
- [ ] Rate limiting
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Data encryption
- [ ] Session management

## Accessibility Requirements

- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Focus management
- [ ] Error announcements
- [ ] Color contrast
- [ ] Motion reduction

## Documentation Needed

1. **Component API**
   - Props documentation
   - Event handlers
   - State management
   - Validation rules

2. **Integration Guide**
   - Setup instructions
   - Configuration options
   - Environment variables
   - API integration

3. **Maintenance Guide**
   - Troubleshooting
   - Performance optimization
   - Security updates
   - API version management