import React from 'react';

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Dowiedz się więcej o <span className="font-bold text-black">enzo</span>
      </h2>
      <p className="text-center text-gray-700 mb-12">
        Pozostaw nam swoje dane, <br className="md:hidden" />
        skontaktujemy się z Tobą w ciągu najbliższej godziny
      </p>

      <div className="grid md:grid-cols-2 gap-16 text-left">
        {/* Formularz */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-small">Imię i Nazwisko</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-3 rounded border border-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-small">Adres e-mail</label>
            <input
              type="email"
              className="w-full bg-gray-100 p-3 rounded border border-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-small">Jaką firmę reprezentujesz</label>
            <input
              type="text"
              className="w-full bg-gray-100 p-3 rounded border border-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-small">Wiadomość</label>
            <textarea
              rows="5"
              className="w-full bg-gray-100 p-3 rounded border border-gray-200 focus:outline-none"
            />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="rodo" />
            <label htmlFor="rodo" className="text-sm text-gray-600">
              Treść klauzuli do checkboxa RODO i odsyłacz do{' '}
              <a href="/polityka-prywatnosci" className="font-medium underline">
                Polityki prywatności
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Wyślij
          </button>
        </form>

        {/* Dane kontaktowe */}
        <div className="text-gray-800 text-sm space-y-2">
          <h3 className="text-lg font-semibold mb-4">Zen Zone Sp. z o.o.</h3>
          <p>ul. Nazwa Ulicy 56<br />00-000 Miejscowość</p>
          <p>tel: 678 098 321</p>
          <p>e-mail: <a href="mailto:biuro@zen-zone.pl" className="underline">biuro@zen-zone.pl</a></p>
          <p className="pt-4">NIP: 5223124565</p>
          <p>KRS: 000000431793</p>
        </div>
      </div>
    </section>
  );
}