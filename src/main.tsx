
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// In Next.js, the entry point is handled differently
// This file exists for backward compatibility during migration
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.warn("Root element not found. Next.js pages should handle rendering.");
}
