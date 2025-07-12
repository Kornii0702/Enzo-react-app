import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-light tracking-wider text-black">
          <img src="/img/LOGO-enzo.svg" alt="" />
        </div>

        {/* Nawigacja */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-800 font-normal">
          <a href="#onas" className="hover:text-black">o nas</a>
          <a href="#produkt" className="hover:text-black">produkt</a>
          <a href="#programy" className="hover:text-black">programy</a>
          <a href="#trenerzy" className="hover:text-black">trenerzy</a>
          <a href="#korzysci" className="hover:text-black">korzyści</a>
          <a href="#kontakt" className="hover:text-black">kontakt</a>
        </nav>
      </div>
    </header>
  );
}
