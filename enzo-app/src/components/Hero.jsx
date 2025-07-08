import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Witamy w Enzo</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Twoje centrum zarządzania projektami i zadaniami.
        </p>
        <div className="flex justify-center">
          <img src="/img/LOGO-enzo.svg" alt="Enzo Logo" className="h-24" />
        </div>
      </div>
    </div>

  );
}
