import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-12 flex justify-center">
      <div className="w-full max-w-[1200px]">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="font-newsreader text-4xl font-semibold tracking-tight text-on-surface">Study Buddy.</h1>
          <div className="text-sm font-geist text-secondary">Lexicon Modern v1.0</div>
        </header>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
