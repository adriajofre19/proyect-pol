'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function BlogNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la suscripción
    setEmail('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Recibe las últimas actualizaciones legales y artículos directamente en tu correo.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}