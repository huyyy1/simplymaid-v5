# Error Handling Documentation

## Overview
The error handling system in the PreBookFlow component is designed to provide clear, immediate feedback for address validation and form submissions. It uses a centralized `ErrorHandlingService` class for consistent validation across the application.

## Core Components

### 1. ErrorHandlingService
```typescript
class ErrorHandlingService {
  // Address validation
  static validateAddress(value: string, selectedFromSuggestions: boolean): string | null
  // Email validation
  static validateEmail(value: string): string | null
  // Name validation
  static validateName(value: string): string | null
  // Mobile number validation
  static validateMobile(value: string): string | null
  // Form data validation
  static validateFormData(formData: Partial<FormData>): string | null
  // Mobile number formatting
  static formatMobileNumber(value: string): string
}
```

### 2. Validation Flow
```typescript
// Example validation flow
const handleSubmit = (value: string) => {
  if (!value) {
    setError("Please enter your location");
    return;
  }

  if (selectedFromSuggestions) {
    onSubmit(value);
  } else {
    setError("Please select an address from the suggestions");
  }
};
```

## Error States

### 1. Address Validation
- Empty input: "Please enter your location"
- No selection from suggestions: "Please select an address from the suggestions"

### 2. Email Validation
- Empty input: "Please enter your email"
- Invalid format: "Please enter a valid email address"

### 3. Name Validation
- Empty input: "Please enter your name"
- Too short: "Name must be at least 2 characters"
- Invalid characters: "Please enter a valid name"

### 4. Mobile Validation
- Empty input: "Please enter your mobile number"
- Invalid format: "Please enter a valid Australian mobile number"
- Wrong prefix: "Please enter a valid mobile number starting with 04"

## Implementation Guidelines

### 1. Component Integration
```typescript
// In your component
import { ErrorHandlingService } from "@/lib/services/error-handling";

const [error, setError] = useState<string | null>(null);
const [selectedFromSuggestions, setSelectedFromSuggestions] = useState(false);

// Validation example
const validateInput = () => {
  const error = ErrorHandlingService.validateAddress(value, selectedFromSuggestions);
  if (error) {
    setError(error);
    return false;
  }
  return true;
};
```

### 2. Error Display
```typescript
<ErrorMessage 
  message={error} 
  className="text-sm text-red-400" 
/>
```

### 3. Form State Management
```typescript
interface FormData {
  bedrooms: string;
  bathrooms: string;
  cleanType: string;
  location: string;
  email: string;
  name: string;
  mobile: string;
}

interface ValidationResult {
  isValid: boolean;
  error: string | null;
}
```

## Best Practices

1. **Immediate Feedback**
   - Show errors as soon as validation fails
   - Clear errors when user starts correcting the input

2. **Clear Messages**
   - Use specific, actionable error messages
   - Explain what went wrong and how to fix it

3. **Visual Indicators**
   - Use consistent error styling
   - Make error states visually distinct

4. **Accessibility**
   - Ensure error messages are screen-reader friendly
   - Use proper ARIA attributes for error states

## Error Recovery

1. **Auto-correction**
   - Format phone numbers automatically
   - Trim whitespace from inputs

2. **Helpful Suggestions**
   - Show address suggestions from Google Places API
   - Guide users toward valid input

3. **Progressive Validation**
   - Validate each step before proceeding
   - Allow back navigation to fix errors

## Mobile Number Formatting

```typescript
// Example of mobile number formatting
const formattedNumber = ErrorHandlingService.formatMobileNumber("0412345678");
// Result: "0412 345 678"

const formattedInternational = ErrorHandlingService.formatMobileNumber("61412345678");
// Result: "+61 412 345 678"
```

## Testing Guidelines

1. **Unit Tests**
```typescript
describe('ErrorHandlingService', () => {
  test('validateAddress', () => {
    expect(ErrorHandlingService.validateAddress("", true)).toBe("Please enter your location");
    expect(ErrorHandlingService.validateAddress("123 Main St", false)).toBe("Please select an address from the suggestions");
    expect(ErrorHandlingService.validateAddress("123 Main St", true)).toBe(null);
  });
});
```

2. **Integration Tests**
- Test form submission with various error states
- Verify error message display and styling
- Check error clearing on valid input

3. **E2E Tests**
- Complete form flow with error scenarios
- Address selection and validation
- Mobile responsiveness of error displays

## Error Monitoring

1. **Logging**
- Log validation failures for analysis
- Track common error patterns

2. **Analytics**
- Monitor error rates by field
- Track user recovery patterns

3. **Performance**
- Measure validation response times
- Monitor API latency impact

## Security Considerations

1. **Input Sanitization**
- Clean user input before validation
- Prevent XSS attacks

2. **Rate Limiting**
- Limit validation attempts
- Prevent brute force attacks

3. **Data Protection**
- Secure error logging
- Protect sensitive information

## Maintenance

1. **Code Updates**
- Keep validation rules current
- Update error messages for clarity

2. **API Changes**
- Monitor Google Places API updates
- Adapt to API response changes

3. **Performance Optimization**
- Cache validation results
- Optimize regex patterns