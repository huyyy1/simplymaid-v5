# Coding Guidelines

## 🎯 Core Principles

1. **Type-First Development**
   - Define types/interfaces before implementing components
   - Use discriminated unions for component variants
   - Keep types in dedicated `/lib/types` directory
   - Example:
     ```typescript
     // Bad: Implicit typing
     const items = [{ title: "Home", href: "/" }];
     
     // Good: Explicit interface with discriminated union
     interface NavigationItem {
       type: "link" | "dropdown";
       title: string;
       href?: string;
       items?: DropdownItem[];
     }
     ```

2. **Theme System & Styling**
   - Use shadcn/ui theme tokens instead of hard-coded values
   - Leverage CSS variables for dynamic theming
   - Combine classes with cn() utility
   - Example:
     ```typescript
     // Bad: Hard-coded colors
     <div className="bg-[#7E57C2] text-white">
     
     // Good: Theme tokens
     <div className={cn(
       "bg-primary text-primary-foreground",
       "hover:bg-primary/90"
     )}>
     ```

3. **Component Architecture**
   - One component per file
   - Keep components focused and single-responsibility
   - Maximum component size: ~250 lines
   - Extract reusable logic into custom hooks
   - Example:
     ```typescript
     // Bad: Multiple components in one file
     export function Header() {
       function Logo() { }
       function Nav() { }
     }
     
     // Good: Separate components
     // components/header/logo.tsx
     export function Logo() { }
     // components/header/nav.tsx
     export function Nav() { }
     ```

4. **UI Component Libraries**
   - Use designated libraries for complex animations and effects
   - Keep library components in dedicated directories
   - Follow strict implementation guidelines
   
   ### Aceternity UI
   - Location: `components/aceternityui/`
   - Use for: Complex animations, 3D effects, gradients
   - Never modify core animation logic
   - Example:
     ```typescript
     // Good: Using Aceternity UI Tabs
     import { Tabs } from "@/components/aceternityui/tabs";
     
     const tabs = [{
       title: "Services",
       value: "services",
       content: <ServicesContent />
     }];
     
     <Tabs tabs={tabs} />
     ```
   
   ### Magic UI
   - Location: `components/magicui/`
   - Use for: Sparkles, marquees, spotlight effects
   - Maintain original animation timing
   - Example:
     ```typescript
     // Good: Using Magic UI Sparkles
     import { SparklesText } from "@/components/magicui/sparkles-text";
     
     <SparklesText 
       text="Magic Text"
       colors={{ first: "#7E57C2", second: "#FF4E8E" }}
     />
     ```

5. **File Organization**
   ```
   components/
   ├── ui/                 # Reusable UI components
   ├── aceternityui/      # Aceternity UI components
   ├── magicui/          # Magic UI components
   ├── {feature}/         # Feature-specific components
   │   ├── index.ts       # Barrel exports
   │   └── {component}/   # Component and related files
   ├── layout/           # Layout components
   └── shared/           # Shared components
   
   lib/
   ├── config/           # Configuration files
   ├── types/           # TypeScript types
   ├── utils/           # Utility functions
   ├── hooks/           # Custom hooks
   └── styles/          # Style configurations
   ```

6. **Component Structure**
   ```typescript
   // Import order
   import { type FC } from 'react'
   import external libraries
   import internal components
   import types/interfaces
   import utils/hooks
   import styles

   // Interface definition
   interface Props {
     title: string
     children: React.ReactNode
   }

   // Component definition
   export function ComponentName({ title, children }: Props) {
     // 1. Hooks
     // 2. Derived state
     // 3. Event handlers
     // 4. Render helpers
     // 5. Render
   }
   ```

7. **State Management**
   - Prefer `useState` for local state
   - Use `useReducer` for complex state logic
   - Keep state as close as possible to where it's used
   - Extract complex state logic into custom hooks
   - Example:
     ```typescript
     // Bad: Global state for everything
     const globalState = { theme: 'dark', user: null };
     
     // Good: Colocated state
     function ThemeProvider() {
       const [theme, setTheme] = useState('dark');
     }
     ```

8. **Styling Patterns**
   - Use Tailwind CSS utility classes
   - Group related classes with cn() utility
   - Extract common patterns into components
   - Use semantic color tokens from theme
   - Example:
     ```typescript
     // Bad: Hard-coded colors and values
     <div className="bg-[#7E57C2] p-[16px] rounded-[8px]">
     
     // Good: Theme tokens and utilities
     <div className={cn(
       "bg-primary p-4 rounded-lg",
       "hover:bg-primary/90",
       "dark:bg-primary/90"
     )}>
     ```

9. **Performance Optimization**
   - Use React.memo() sparingly and only with profiling
   - Implement virtualization for long lists
   - Lazy load components and routes
   - Example:
     ```typescript
     // Bad: Eager loading everything
     import { HeavyComponent } from './heavy';
     
     // Good: Lazy loading
     const HeavyComponent = lazy(() => 
       import('./heavy').then(mod => ({ 
         default: mod.HeavyComponent 
       }))
     );
     ```

10. **Error Handling**
    - Use Error Boundaries for component errors
    - Implement proper loading states
    - Handle edge cases explicitly
    - Example:
      ```typescript
      // Bad: No error handling
      function Component() {
        const data = useData();
        return <div>{data.title}</div>
      }
      
      // Good: Complete error handling
      function Component() {
        const { data, error, loading } = useData();
        
        if (loading) return <Skeleton />;
        if (error) return <ErrorMessage error={error} />;
        if (!data) return null;
        
        return <div>{data.title}</div>;
      }
      ```

## 📝 Documentation

1. **Component Documentation**
   - Document props with TypeScript interfaces
   - Add JSDoc comments for complex logic
   - Include usage examples
   - Example:
     ```typescript
     /**
      * Primary button component with loading state
      * @example
      * <Button variant="primary" loading>
      *   Submit
      * </Button>
      */
     interface ButtonProps {
       /** Button style variant */
       variant: 'primary' | 'secondary';
       /** Loading state */
       loading?: boolean;
     }
     ```

2. **Code Comments**
   - Comment "why" not "what"
   - Keep comments up to date
   - Use TODO comments for technical debt
   - Example:
     ```typescript
     // Bad: Explaining the obvious
     // Increment count by 1
     count += 1;
     
     // Good: Explaining the reason
     // Increment by 1 to account for zero-based index
     count += 1;
     ```

## 🔄 Version Control

1. **Commit Messages**
   - Use conventional commits
   - Reference issues/tickets
   - Keep commits focused
   - Example:
     ```
     feat(nav): add dropdown menu for services
     
     - Add dropdown component
     - Implement keyboard navigation
     - Add hover animations
     
     Closes #123
     ```

2. **Branch Strategy**
   - Use feature branches
   - Keep branches short-lived
   - Rebase before merging
   - Example:
     ```
     feature/add-nav-dropdown
     bugfix/fix-nav-accessibility
     chore/update-dependencies
     ```