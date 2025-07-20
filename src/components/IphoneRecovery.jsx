import React from 'react';

export default function IphoneRecovery() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-800 text-white p-6 rounded-2xl shadow-md mb-6">
        <h1 className="text-4xl font-bold">iPhone Data Recovery</h1>
        <p className="mt-2 text-lg">
          Recover your important data even if your iPhone has a black screen or won’t turn on.
        </p>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Common Issues We Fix</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Black Screen or Unresponsive iPhone</li>
          <li>iPhone Won't Turn On or Boot Up</li>
          <li>Accidental Data Deletion</li>
          <li>Water Damage Data Recovery</li>
          <li>Corrupted iOS System</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Contact us by phone, email, or online form to request iPhone data recovery service.</li>
          <li>We will arrange to pick up your iPhone within the New Jersey service area.</li>
          <li>You will receive a receipt confirming we received your device.</li>
          <li>Our technicians recover your data using specialized tools and techniques.</li>
          <li>We deliver your iPhone back to you safely with all recovered data.</li>
        </ol>
      </section>

      <section className="text-center">
        <a
          href="mailto:support@protechnj.com"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Request iPhone Data Recovery
        </a>
      </section>
    </div>
  );
}