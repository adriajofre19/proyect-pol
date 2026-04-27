import {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/constants/site";

export function JsonLdLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.avif`,
    image: `${SITE_URL}/images/logo.avif`,
    description:
      "Despacho de abogados en Barcelona especializado en derecho laboral, seguridad social, extranjería, derecho de familia y civil.",
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer de París, 45-47",
      addressLocality: "Barcelona",
      addressRegion: "Catalunya",
      postalCode: "08029",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.3888",
      longitude: "2.1511",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    priceRange: "$$",
    hasMap:
      "https://maps.google.com/?q=Carrer+de+París,+45-47,+08029+Barcelona",
    sameAs: [SITE_URL],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdPerson() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pol Arenas Mora",
    jobTitle: "Abogado",
    description:
      "Abogado colegiado nº 48.421 ICAB, especialista en derecho laboral en Barcelona.",
    url: `${SITE_URL}/nosotros`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    worksFor: {
      "@type": "LegalService",
      name: SITE_NAME,
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el proceso para iniciar mi caso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El proceso comienza con una consulta inicial gratuita donde evaluamos su caso y determinamos la mejor estrategia legal a seguir.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede llevar resolver mi caso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los tiempos varían según la complejidad del caso. Durante la consulta inicial, podremos darle una estimación más precisa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentación necesito preparar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La documentación requerida dependerá del tipo de caso. Le proporcionaremos una lista detallada durante la primera consulta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen facilidades de pago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos diferentes opciones de pago y planes personalizados según las necesidades de cada cliente.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
