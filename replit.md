# Replit.md - Letterio Amadeo Website

## Overview

This is a full-stack web application for an adult entertainment performer's official website. The application features a modern, dark-themed design with age verification, media galleries, contact forms, and newsletter functionality. It's built as a single-page application with a Node.js/Express backend and React frontend.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server:

**Frontend**: React SPA with TypeScript, using modern UI components and routing
**Backend**: Express.js server with TypeScript, providing REST API endpoints
**Database**: PostgreSQL with Drizzle ORM for type-safe database operations
**Styling**: Tailwind CSS with shadcn/ui components for consistent design
**Build System**: Vite for fast development and optimized production builds

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom luxury-themed color palette
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with development optimizations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for contact forms and newsletter subscriptions
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **Session**: Express sessions with PostgreSQL storage
- **Middleware**: CORS, JSON parsing, error handling

### Database Schema
The application uses four main tables:
- **users**: Authentication (username, password)
- **contacts**: Contact form submissions with inquiry types
- **newsletter_subscribers**: Email subscription management
- **content_items**: Media gallery items with NSFW filtering

### UI/UX Features
- Age verification modal with localStorage persistence
- Responsive navigation with mobile menu
- Media gallery with tabs (photos, videos, behind-the-scenes)
- NSFW content toggle functionality
- Lightbox modal for image viewing
- Contact form with validation
- Newsletter subscription
- Smooth scrolling navigation
- Dark theme with gold accent colors

## Data Flow

1. **Age Verification**: Users must verify they are 18+ before accessing content
2. **Content Filtering**: NSFW content is hidden by default, toggleable via navigation
3. **Contact Form**: Validated submissions stored in database with success/error feedback
4. **Newsletter**: Email subscriptions with duplicate prevention
5. **Media Gallery**: Content categorized and filtered based on user preferences

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation with Zod integration
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives (dialogs, forms, navigation)
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

**Development Environment**:
- Uses Vite dev server with HMR for frontend
- Express server runs via tsx for TypeScript execution
- PostgreSQL database provisioned through Replit

**Production Build**:
- Frontend builds to static assets via Vite
- Backend bundles to single file via esbuild
- Serves static files through Express
- Database migrations managed through Drizzle Kit

**Replit Configuration**:
- Node.js 20 runtime with PostgreSQL 16 module
- Auto-scaling deployment target
- Port 5000 mapped to external port 80
- Development and production npm scripts configured

## Changelog
- June 23, 2025. Replaced media gallery with authentic videos from Machotube.tv and Xhamster
  - Cleared all existing content and populated with 12 real videos from specified sources
  - 6 videos from Machotube.tv and 6 videos from Xhamster featuring Letterio Amadeo
  - Eliminated duplicates and ensured all content is authentic with real external URLs
  - Fixed thumbnail loading issues with proper static file serving for attached assets
  - Videos include professional studio sessions, solo performances, and exclusive content
- June 23, 2025. Configured media gallery to show only video content from external platforms
  - Filtered to display only videos from Xvideos, Machotube.tv, Gayporno.fm, Xhamster, Pornhub, and XNXX
  - Updated gallery title to "VIDEO GALLERY" to reflect video-only content
  - Removed photo and behind-the-scenes tabs to focus on external video platforms
  - Currently displaying 13 videos from authorized external platforms
  - Enhanced compact About section with Verdana font for improved readability
- June 23, 2025. Updated performer spotlight with authentic professional studio images
  - Integrated high-quality images from Hard Brit Lads and Raging Stallion studios
  - Updated spotlight content descriptions to reflect authentic studio collaborations
  - Applied image upscaling and enhancement to new professional photography
  - Enhanced visual impact with verified studio content and proper attribution
- June 23, 2025. Implemented comprehensive image upscaling and enhancement system
  - Created ImageUpscaler utility with canvas-based interpolation and AI-enhancement algorithms
  - Applied enhanced-image CSS class across all components for improved visual quality
  - Implemented unsharp mask filtering for increased image sharpness and clarity
  - Added high-quality rendering with hardware acceleration and backface visibility optimization
  - Enhanced hero background, performer spotlight, media gallery, and about section images
  - Added shimmer loading animations and quality indicators for enhanced user experience
- June 23, 2025. Implemented animated performer spotlight with dynamic background transitions
  - Created PerformerSpotlight component with automatic image cycling and smooth transitions
  - Added dynamic gradient backgrounds that change with each spotlight rotation
  - Implemented floating particle effects and geometric animations for visual depth
  - Added interactive thumbnail navigation and progress bar animation
  - Integrated spotlight stats display with professional metrics
  - Connected action buttons to navigate to media portfolio and fan zone pages
- June 23, 2025. Enhanced UI with Drugs font and expanded video content from multiple platforms
  - Applied Drugs font consistently across the web application for bold, dynamic typography
  - Added authentic video content from Xvideos, Machotube.tv, and Gayporno.fm platforms
  - Updated About section with authentic information from PBC wiki source
  - Implemented dynamic filtering and sorting in media gallery with platform-specific options
  - Added performance optimizations with memoization and callback functions
  - Fixed social media links to point to official Letterio Amadeo profiles
- June 23, 2025. Refactored application to use separate pages instead of single-page scrolling
  - Created dedicated pages for About (/about), Media (/media), Booking (/booking), and Fan Zone (/fanzone)
  - Updated navigation component to use wouter routing with Link components instead of scroll-to-section
  - Unified media gallery and video gallery into single component with tabbed interface
  - Connected Twitter/X link to official x.com/letterioamadeo profile
  - Fixed video metadata and ensured all media displays correctly with proper NSFW filtering
- June 19, 2025. Implemented multi-platform video sourcing with embedded viewing
  - Sourced 18 videos from official studios and major platforms (Pornhub, Xhamster, XNXX)
  - Added embedded video viewing functionality directly on site using iframe integration
  - Implemented platform-specific embed URL generation for seamless video playback
  - Created video modal component with full-screen viewing capabilities
  - Added visual indicators for embeddable vs external link videos
  - Integrated content from 10+ official studios including MEN.COM, Kristen Bjorn, Tim Tales
- June 19, 2025. Integrated authentic content from official letterio.cdxi.au website
  - Scraped and integrated official metadata and descriptions from letterio.cdxi.au
  - Updated website meta tags with authentic title and descriptions from official source
  - Enhanced About section content with official website language and descriptions  
  - Added authentic content entries to database with verified status from official site
  - Updated hero section tagline to match official site messaging
  - Fixed video content links and metadata validation for all studio partnerships
- June 19, 2025. Enhanced security and layout optimization
  - Implemented comprehensive age verification system with two-step validation
  - Created dedicated landing page with enhanced minor protection features
  - Removed upcoming projects section to streamline user experience
  - Updated header typography with mixed font styling (italic Playfair + sans-serif)
  - Integrated video gallery with authentic studio content and external links
  - Added metadata validation system for content integrity verification
- June 19, 2025. Added PostgreSQL database and expanded image gallery
  - Migrated from in-memory storage to PostgreSQL database with Drizzle ORM
  - Added all remaining Letterio Amadeo images to expand content gallery
  - Implemented automatic sample content initialization for first-time setup
  - Enhanced photo gallery with comprehensive professional and artistic content
- June 19, 2025. Integrated authentic Letterio Amadeo images throughout the website
  - Replaced placeholder images with professional photos from attached assets
  - Updated hero section, about section, and media gallery with real content
  - Configured proper asset serving and URL encoding for image files
  - Categorized content with appropriate NSFW flags for content filtering
- June 14, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.