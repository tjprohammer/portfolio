import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';

declare namespace JSX {
    interface IntrinsicElements {
      tab: string;
    }
  }

const container = document.getElementById('app');
if (container){
    createRoot(container).render(<App tab='App' />);
}