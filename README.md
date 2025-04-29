# Next.js 15 Dashboard with PostgreSQL

![Dashboard Preview](https://github.com/G1anpierre/next15-dashboard-posgres/raw/main/public/dashboard-preview.png)

A modern, full-stack dashboard application built with Next.js 15 and PostgreSQL, demonstrating best practices for building data-rich web applications.

## Features

- **Dashboard Analytics**: Visual data representation with charts and metrics
- **User Authentication**: Secure authentication with NextAuth.js
- **Data Management**: CRUD operations for invoices and customers
- **Search & Filtering**: Advanced search functionality with server-side processing
- **Pagination**: Efficient data browsing with server-side pagination
- **Form Validation**: Client and server-side validation
- **Real-time Updates**: Live data updates using server actions
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind
- **Charts**: Recharts for data visualization
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel with Vercel Postgres

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/G1anpierre/next15-dashboard-posgres.git
   cd next15-dashboard-posgres
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   # Database
   DATABASE_URL=your_postgresql_connection_string
   
   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   npm run db:setup
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Data Model

The application uses the following data models:

- **Users**: Authentication and user management
- **Customers**: Customer information and details
- **Invoices**: Invoice data linked to customers
- **Revenue**: Financial data for dashboard analytics

## Application Structure

- `/app`: Next.js App Router components and pages
  - `/dashboard`: Main dashboard and analytics
  - `/invoices`: Invoice management
  - `/customers`: Customer management
  - `/auth`: Authentication pages
- `/components`: Reusable UI components
- `/lib`: Utility functions and data fetching logic
- `/prisma`: Database schema and migrations
- `/public`: Static assets

## Performance Optimizations

The application implements several performance optimizations:

- **Server Components**: Reduced client-side JavaScript
- **Streaming**: Progressive rendering for improved UX
- **Route Groups**: Logical organization of routes
- **Edge Runtime**: Fast global performance where applicable
- **Image Optimization**: Automatic image optimization
- **Suspense Boundaries**: Elegant loading states

## Deployment

This application is optimized for deployment on Vercel:

1. Push your repository to GitHub
2. Connect it to Vercel
3. Set up environment variables in the Vercel dashboard
4. Deploy with a single click

Alternatively, you can deploy to any platform that supports Next.js applications.

## Learning Resources

This project was developed based on the [Next.js App Router Course](https://nextjs.org/learn), with additional features and improvements:

- Enhanced database schema
- Advanced filtering capabilities
- Extended dashboard analytics
- Custom authentication flows
- Improved error handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.