
// Re-export everything from the types and options files
export * from './types';
export * from './options';

// Import and re-export the smoothies from the structured data files
import { smoothies } from './smoothies/index';
export { smoothies };
