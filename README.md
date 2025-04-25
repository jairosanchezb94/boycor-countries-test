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
![Captura de pantalla 2025-04-25 111846](https://github.com/user-attachments/assets/73083af2-9140-4258-8692-b05f097db5b4)
![Captura de pantalla 2025-04-25 111826](https://github.com/user-attachments/assets/44c335c7-33c4-40a0-96b7-4c34fd03934a)
![Captura de pantalla 2025-04-25 111608](https://github.com/user-attachments/assets/c91161bc-16bc-4cd8-b2a9-532a5e2e104a)
![Captura de pantalla 2025-04-25 111623](https://github.com/user-attachments/assets/137ae895-de14-438a-bac7-b37355640efe)
![Captura de pantalla 2025-04-25 111720](https://github.com/user-attachments/assets/d8849825-54a1-4b37-9563-a8ee7e6d79a6)
![Captura de pantalla 2025-04-25 111748](https://github.com/user-attachments/assets/c0502ef6-94cd-4978-8c15-074e54d52085)
![Captura de pantalla 2025-04-25 112106](https://github.com/user-attachments/assets/2d49f9e5-a28f-4fb8-aaf0-7eb49f82d4f5)
![Captura de pantalla 2025-04-25 112053](https://github.com/user-attachments/assets/c2c7923a-251c-4a96-b7de-60521533036b)
![Captura de pantalla 2025-04-25 112029](https://github.com/user-attachments/assets/c2d5b6bb-79bd-450d-ae5a-ea606ecb8868)
![Captura de pantalla 2025-04-25 112005](https://github.com/user-attachments/assets/c3a84ffa-5eb2-41c6-ac6c-469631e43aeb)
![Captura de pantalla 2025-04-25 111931](https://github.com/user-attachments/assets/9815cf8a-dec7-43e2-b4d7-7bbafc342818)
![Captura de pantalla 2025-04-25 111917](https://github.com/user-attachments/assets/989ef5bf-5a92-472e-9ed7-ca83e1099354)
![Captura de pantalla 2025-04-25 111903](https://github.com/user-attachments/assets/a4fcd4cc-86e0-43a3-8aaa-49a08cbb9b20)


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

