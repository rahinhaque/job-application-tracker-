# Job Application Tracker (Enhanced Edition)

A full-stack, visually renovated job application tracking system built with Next.js, featuring a highly interactive Kanban board interface for managing your job search.

This project is an enhanced and polished version of a tutorial project. It builds upon the original foundation with a more premium, modern design, improved user experience, and upgraded technical implementations.

## 🎥 Origin
This project originally accompanied a YouTube tutorial series. It has since been cloned, renovated, and refined to offer a sleeker interface, better stability, and production-ready optimizations (like enhanced Vercel deployment support and strict type-safety).

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Database:** MongoDB with Mongoose
- **Authentication:** Better Auth
- **Drag & Drop:** `@dnd-kit`
- **UI Components:** Base UI / Radix UI inspired primitives
- **Icons:** Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd job-application-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory. For production, ensure you add these to your Vercel/hosting dashboard:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_SECRET=your_random_secret_string
   BETTER_AUTH_URL=http://localhost:3000 # Use your live domain in production
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Application Architecture

This section walks you through the key parts of the codebase and how they work together.

### 1. Database Setup (`lib/db.ts`)
The database connection uses a caching pattern to prevent multiple connections in development:
- Global caching prevents connection issues during hot reloads
- Connection reuse improves performance
- Error handling ensures graceful failures

### 2. Data Models (`lib/models/`)
The application uses three main models with relationships:
- **Board Model (`board.ts`)**: Represents a user's job hunt board. Contains references to columns. One board per user.
- **Column Model (`column.ts`)**: Represents Kanban columns (Wish List, Applied, Interviewing, etc.). Contains references to job applications. Has an `order` field for sorting.
- **JobApplication Model (`job-application.ts`)**: Stores individual job application data. References both column and board. Includes fields like company, position, location, salary, tags, etc.

*Relationship Structure:* `Board (1) → (many) Columns → (many) JobApplications`

### 3. Authentication (`lib/auth/auth.ts`)
Better Auth is configured with the MongoDB adapter.
- **Features:** Email/password authentication, automatic board creation on signup, and robust session management with cookie caching.

### 4. Server Actions (`lib/actions/job-applications.ts`)
Server actions handle all data mutations safely and securely:
- `createJobApplication`: Validates session, verifies ownership, calculates order, and updates column references.
- `updateJobApplication`: Handles moving jobs between columns, manages order updates with a gap strategy, and shifts other jobs when reordering.
- `deleteJobApplication`: Removes job from database, cleans up references, and revalidates the cache.

### 5. Drag & Drop Implementation (`components/Kanban-board.tsx`)
The Kanban board utilizes `@dnd-kit` for seamless drag and drop:
- **Drag Flow:** User starts dragging → `handleDragStart` sets active item → User drops → `handleDragEnd` calculates new position.
- Handles dropping on a column, dropping on another job, and reordering within the same column.
- Features visual feedback during drag (opacity, overlay) and collision detection.

### 6. Client State Management (`lib/hooks/useBoard.ts`)
Custom hook manages board state and provides mutation functions, maintaining local state synchronized with the server and offering optimistic updates for a better UX.

### 7. Seeding the Database (`scripts/seed.ts`)
The seed script populates the database with sample job applications.
*Note:* The codebase recommends batch inserts (`JobApplication.insertMany`) for production-grade seeding to reduce database round trips and improve performance.

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `BETTER_AUTH_SECRET` | Secret key for signing session cookies | ✅ |
| `BETTER_AUTH_URL` | Your app's base URL (e.g. `https://your-app.vercel.app`) | ✅ (Production) |

> **Vercel Deployment Tip:** Make sure all three environment variables are set in your Vercel project settings (**Settings → Environment Variables**). Also ensure your MongoDB Atlas cluster allows access from all IPs (`0.0.0.0/0`) since Vercel serverless functions use dynamic IPs.

---

## 📁 Project Structure
```
job-application-tracker/
├── app/                        # Next.js App Router pages
│   ├── (auth)/                 # Authenticated routes
│   │   └── dashboard/          # Main Kanban dashboard
│   ├── (home)/                 # Public routes
│   │   ├── About/              # About page
│   │   └── Contact/            # Contact page
│   └── api/
│       └── auth/[...all]/      # Better Auth API handler
├── components/                 # React components
│   ├── ui/                     # Reusable UI primitives (Button, Dialog, etc.)
│   ├── Kanban-board.tsx        # Main Kanban board with drag & drop
│   ├── job-application-card.tsx# Individual job card component
│   ├── create-job-dialogue.tsx # Job creation dialog
│   ├── navbar.tsx              # Navigation bar
│   ├── footer.tsx              # Site footer
│   └── FinalCTABand.tsx        # Call-to-action section
├── lib/
│   ├── actions/                # Server actions for data mutations
│   ├── auth/                   # Better Auth configuration
│   ├── hooks/                  # Custom React hooks
│   ├── models/                 # Mongoose models & types
│   ├── db.ts                   # Database connection
│   └── init-user-board.ts      # New user board initialization
└── scripts/                    # Utility scripts
    └── seed.ts                 # Database seeding
```

---

## 🎯 Key Highlights & Renovations
- **Server vs Client Components:** Strict separation following Next.js 16 best practices, resolving prerendering issues with dynamic data.
- **Modern UI Patterns:** Refined component structures using stable `render` props instead of deprecated `asChild` patterns.
- **Server Actions:** Type-safe mutations without needing dedicated API routes.
- **Database Relationships:** Efficient querying using Mongoose `populate`.
- **State Management:** Blending server state with client state for real-time drag-and-drop.
- **Production-Ready:** Fully builds and deploys on Vercel without type errors or prerender failures.

## 📝 Available Scripts
| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run seed:jobs` | Seed database with sample jobs |

## 🎓 Next Steps
After exploring this project, consider:
- Adding job application status history
- Implementing search and filtering
- Adding email notifications for status changes
- Creating multiple boards per user
- Implementing an analytics dashboard

## 📄 License
This project was initially created for educational purposes and has been actively renovated and enhanced. Feel free to use it as a foundation for your own tracker!
