
```

## 🛠 Development

1. Clone and install dependencies:
```bash
git clone https://github.com/your-org/simply-maid.git
cd simply-maid
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Start development server:
```bash
npm run dev
```

## 🔐 Environment Variables

Required environment variables:
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Email
RESEND_API_KEY=
```

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Colors**: Custom color palette with semantic tokens
- **Typography**: Type scale with responsive variants
- **Spacing**: Consistent spacing scale
- **Components**: shadcn/ui + custom components
- **Animations**: Framer Motion + custom animations

See [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) for details.

## 📱 Components

Key component categories:

1. **Layout Components**
   - `PageLayout`: Base page layout
   - `SectionLayout`: Section wrapper
   - `Container`: Content container

2. **UI Components**
   - Buttons, Cards, Forms
   - Navigation elements
   - Data display components

3. **Feature Components**
   - Booking flow
   - Service displays
   - Reviews and testimonials

See [COMPONENTS.md](docs/COMPONENTS.md) for details.

## 🔄 State Management

- React Context for global state
- React Query for server state
- Form state with React Hook Form
- URL state with Next.js Router

## 🎯 Performance

Current Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Optimizations:
- Static page generation
- Image optimization
- Code splitting
- Route prefetching

## 📚 Documentation

- [Component Guidelines](docs/COMPONENTS.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Google API Integration](docs/GOOGLE_API.md)
- [Pre-book Flow](docs/PRE_BOOK_FLOW.md)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Type check
npm run type-check
```

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

The project is configured for static export, making it deployable to any static hosting platform.

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md)