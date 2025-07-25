import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ParallaxPortfolio from './ParallaxPortfolio.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxPortfolio />
  </StrictMode>
);
