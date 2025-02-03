'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import Link from 'next/link';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acceptPrivacy) {
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Correo enviado exitosamente.');
      } else {
        alert('Hubo un error al enviar el correo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el correo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre completo
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">Seleccione un asunto</option>
            <option value="laboral">Derecho Laboral</option>
            <option value="Seguridad Social">Derecho de la Seguridad Social</option>
            <option value="Consumidores">Derecho de Consumidores</option>
            <option value="inmobiliario">Derecho Inmobiliario</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Consulta
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          ></Textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={acceptPrivacy}
              onChange={(e) => setAcceptPrivacy(e.target.checked)}
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
              required
            />
          </div>
          <div className="ml-3">
            <label htmlFor="privacy" className="text-sm text-gray-600">
              He leído y acepto la{' '}
              <Link href="/politica-privacidad" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Política de Privacidad
              </Link>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !acceptPrivacy}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Enviando...'
          ) : (
            <>
              Enviar mensaje
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}