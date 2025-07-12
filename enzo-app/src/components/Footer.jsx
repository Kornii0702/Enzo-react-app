import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-16 text-left">
      <div className=" max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
        <div>
          <h3 className="text-black font-semibold mb-4">Niezbędne informacje:</h3>
          <ul className="space-y-2 text-sm text-gray-700 text-left">
            <li><a href="/regulamin" className="hover:underline">Regulamin serwisu</a></li>
            <li><a href="/polityka-prywatnosci" className="hover:underline">Polityka prywatności</a></li>
            <li><a href="/prawa-autorskie" className="hover:underline">Prawa autorskie</a></li>
            <li><a href="/cookies" className="hover:underline">Informacje o plikach Cookies</a></li>
          </ul>
        </div>

        <div className="flex justify-end items-start space-x-4">
          <img src="/img/UE.png" alt="Fundusze Europejskie" className="h-8 md:h-10" />

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2021 Zen Zone Sp. z o.o.</p>
        <p className="flex items-center gap-1">
          Projekt i wdrożenie 
          <a href="https://hibrand.pl" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded px-2 py-0.5 ml-1 text-xs font-semibold">
            hi
          </a>
        </p>
      </div>
    </footer>
  );
}
