export function ContactMap() {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.08846182914394!2d2.143832104830555!3d41.38678456171628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49878c816ccf5%3A0xcf59a1c79262dfaf!2sCarrer%20de%20Par%C3%ADs%2C%2045-47%2C%20Entresuelo%203%C2%BA%2C%20Eixample%2C%2008029%20Barcelona!5e0!3m2!1ses!2ses!4v1736936376681!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Ubicación de Arenas Mora & Asociados"
      ></iframe>
    </div>
  );
}