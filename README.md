# Browser Extensions Manager

A modern, responsive web application for managing browser extensions with an intuitive user interface and seamless dark mode support.

![Extensions Manager Logo](/src/assets/images/logo.svg)

## Features

- 🎯 **Extension Management**: Easily activate, deactivate, and remove browser extensions
- 🔍 **Smart Search**: Real-time search functionality across extension names and descriptions
- 🏷️ **Filtering System**: Quick filters for viewing all, active, or inactive extensions
- 🌓 **Dark Mode**: Seamless theme switching with system preference support
- 🎨 **Modern UI**: Clean, responsive design with smooth transitions
- 📱 **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- 🔔 **Toast Notifications**: Instant feedback for user actions

## Tech Stack

### Frontend

- **React**: UI library for building component-based interfaces
- **TypeScript**: Static typing for enhanced code reliability
- **Vite**: Next-generation frontend tooling for fast development
- **TailwindCSS**: Utility-first CSS framework for modern designs
- **React Hot Toast**: Lightweight toast notifications

### State Management

- **Zustand**: Lightweight state management with minimal boilerplate
- **Custom Hooks**: Modular and reusable state logic

### Development Tools

- **ESLint**: Code linting for consistent code style
- **Prettier**: Code formatting for clean, consistent code
- **TypeScript**: Static type checking

## Project Structure

```
browser-extensions-manager/
├── src/
│   ├── assets/         # Static assets (images, icons)
│   ├── components/     # Reusable React components
│   ├── store/         # Zustand store and state management
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
```

## Design Methodologies

### Component Architecture

- **Atomic Design**: Components are built following atomic design principles
- **Composition**: Emphasis on component composition over inheritance
- **Reusability**: Components are designed to be reusable and maintainable

### Styling Approach

- **Utility-First**: Using TailwindCSS for rapid UI development
- **Dark Mode**: System-aware theme switching with CSS variables
- **Responsive Design**: Mobile-first approach with breakpoint-based adaptations

### State Management

- **Single Source of Truth**: Centralized state management with Zustand
- **Immutable Updates**: State updates follow immutability principles
- **Action-Based**: Clear and predictable state modifications

### Performance Optimizations

- **Code Splitting**: Lazy loading for optimal bundle size
- **Memoization**: Strategic use of React.memo and useMemo
- **Efficient Renders**: Optimized component re-renders

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/browser-extensions-manager.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
