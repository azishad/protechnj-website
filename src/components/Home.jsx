import React from 'react';

export default function Home() {
  return (
    <div className="p-4">
      <header className="bg-blue-800 text-white p-6 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold">ProTech NJ</h1>
        <p className="text-lg mt-2">Reliable Mac & PC Repair – Fast, Affordable, Local.</p>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔️ Mac & Windows Diagnostics & Repair</li>
            <li>✔️ Virus & Malware Removal</li>
            <li>✔️ SSD & RAM Upgrades</li>
            <li>✔️ Data Backup & Recovery</li>
            <li>✔️ iPhone Data Recovery (black screen or device not turning on)</li>
            <li>✔️ Operating System Installation (Windows/macOS)</li>
            <li>✔️ Remote Support Available</li>
            <li>✔️ Custom PC Builds</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">📍 Serving: Piscataway, East Brunswick, New Brunswick & Surrounding Areas</p>
          <p className="mb-2">📞 Call or Text: (732) 555-1234</p>
          <p className="mb-2">📧 Email: support@protechnj.com</p>
          <p>📱 WhatsApp Support Available</p>
          <p>🕒 Hours: Mon–Sat, 10am – 8pm</p>
        </div>
      </section>

      <section className="mt-8 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Fast & Reliable Service</li>
          <li>Honest & Transparent Pricing</li>
          <li>Skilled in All Major Brands (Apple, Dell, HP, Lenovo, etc.)</li>
          <li>On-site & Remote Options</li>
          <li>100% Customer Satisfaction Guarantee</li>
        </ul>
      </section>

      <section className="mt-8 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Video Production Services</h2>
        <p className="text-gray-700 mb-4">
          Showcase your restaurant or business with professional, modern videos that attract customers and boost your brand.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>📹 Promotional Videos</li>
          <li>🎥 Event Coverage</li>
          <li>📱 Social Media Clips</li>
          <li>🎬 Menu Highlights</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Pricing</h3>
        <ul className="space-y-1 text-gray-700">
          <li>Basic Package: $150 – Up to 2 minutes video</li>
          <li>Standard Package: $300 – Up to 5 minutes video + Editing</li>
          <li>Premium Package: $500 – Up to 10 minutes video + Advanced Editing + Script</li>
        </ul>
      </section>
    </div>
  );
}