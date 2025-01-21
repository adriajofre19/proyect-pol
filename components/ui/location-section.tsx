import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ubicación del Despacho
          </h2>
          <p className="text-xl text-gray-600">
            Encuentre nuestro bufete en l'Esquerra de l'Eixample
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Dirección</h3>
                  <p className="text-gray-600">
                    Carrer de París, 45-47 Entresuelo 3ª<br />
                    08029 Eixample, Barcelona
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">+34 933 220 553</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">polarenas@icab.cat</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">Horario</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 - 18:00<br />

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.08846182914394!2d2.143832104830555!3d41.38678456171628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49878c816ccf5%3A0xcf59a1c79262dfaf!2sCarrer%20de%20Par%C3%ADs%2C%2045-47%2C%20Entresuelo%203%C2%BA%2C%20Eixample%2C%2008029%20Barcelona!5e0!3m2!1ses!2ses!4v1736936376681!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}