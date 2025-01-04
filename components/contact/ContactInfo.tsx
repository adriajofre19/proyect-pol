import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Dirección</h3>
            <p className="text-gray-600">
              Calle Principal 123<br />
              28001 Madrid, España
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Teléfono</h3>
            <p className="text-gray-600">+34 600 000 000</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">contacto@suabogado.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-yellow-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Horario</h3>
            <p className="text-gray-600">
              Lunes a Viernes: 9:00 - 18:00<br />
              Sábados: Con cita previa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}