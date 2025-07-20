import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import IphoneRecovery from './components/IphoneRecovery';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'iphoneRecovery' && <IphoneRecovery />}
    </div>
  );
}