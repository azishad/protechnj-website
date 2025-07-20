import React from 'react';

export default function Navigation({ setPage }) {
  return (
    <nav className="bg-blue-900 text-white p-4 rounded-b-xl shadow-md flex gap-6">
      <button onClick={() => setPage('home')} className="hover:underline">
        Home
      </button>
      <button onClick={() => setPage('iphoneRecovery')} className="hover:underline">
        iPhone Data Recovery
      </button>
    </nav>
  );
}