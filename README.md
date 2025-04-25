# Country Explorer - REST Countries API with Color Theme

A web application that integrates with the REST Countries API to display country information with a clean and responsive interface.

## Features

- View all countries from the REST Countries API on the homepage
- Search for countries using an input field
- Filter countries by region with a dropdown
- Click on a country to see detailed information on a separate page
- Navigate through border countries on the detail page
- Toggle between light and dark color schemes
- Responsive design for mobile and desktop
- Pagination for better data management
- Infinite scroll on mobile devices

### Screenshot
![Country Explorer Screenshot](./screenshot.jpg)

## Developed With

- **React + TypeScript** - For building a robust and type-safe user interface
- **Tailwind CSS** - For rapid UI development and consistent styling
- **React Router DOM** - For handling client-side routing
- **React Query** - For efficient server-state management and data fetching
- **shadcn/ui** - For beautiful and accessible UI components
- **Semantic HTML5** - For better accessibility and SEO

### Component Structure
- Well-organized component hierarchy
- Reusable components for common UI elements
- Responsive layout using Flexbox and Grid
- Clean and maintainable code structure

## Challenges and Solutions

1. **Region Filter Implementation**
   - Challenge: Maintaining filter state while implementing search functionality
   - Solution: Implemented a robust state management system that preserves filter selection

2. **Responsive Design**
   - Challenge: Creating a seamless experience across devices
   - Solution: Used Tailwind's responsive classes and implemented device-specific features (pagination for desktop, infinite scroll for mobile)

3. **Performance Optimization**
   - Challenge: Handling large datasets efficiently
   - Solution: Implemented pagination and lazy loading strategies to improve performance

4. **Dark Mode Implementation**
   - Challenge: Creating a consistent theme across components
   - Solution: Utilized Tailwind's dark mode utilities with CSS custom properties for dynamic theming

## Additional Notes

- The application follows best practices for accessibility
- Implemented error handling for failed API requests
- Added loading states for better user experience
- Optimized for both mobile and desktop viewports
- Clean and maintainable code structure with TypeScript

