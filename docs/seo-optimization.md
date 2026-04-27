# SEO Optimization — Arenas Mora & Asociados

> Rama de trabajo: `seo-optimize`  
> Fecha de análisis: 27 de abril de 2026  
> Dominio: https://arenasmorapol.com

---

## Checklist de Tareas

### 🔴 Crítico (máximo impacto en ranking)

- [ ] **1. Metadata única por página** — Separar Server/Client components para poder exportar `metadata` individual en cada ruta (`/blog`, `/servicios`, `/nosotros`, `/contacto`, `/aviso-legal`, `/cookies`, `/politica-privacidad`)
- [ ] **2. Corregir H1 múltiples** — `AboutSection` y `FeaturesSection` usan `<h1>` incorrectamente. La homepage tiene 6+ H1. Deben ser `<h3>`
- [ ] **3. Implementar JSON-LD / Schema Markup** — `LegalService`, `LocalBusiness`, `Attorney`, `Person`, `FAQPage`, `BreadcrumbList`
- [ ] **4. Eliminar `unoptimized: true`** en `next.config.js` para restaurar la pipeline de optimización de imágenes de Next.js

### 🟠 Alto impacto

- [ ] **5. Completar Open Graph** — Añadir `title`, `description`, `type`, `url`, `siteName`, `locale: 'es_ES'` en `app/layout.tsx`
- [ ] **6. Corregir Twitter Card** — Cambiar a `summary_large_image` y añadir imagen
- [ ] **7. Corregir imagen Open Graph** — Referencia `/logo.png` pero solo existe `logo.avif`
- [ ] **8. Unificar sistema de sitemap** — Eliminar conflicto entre `app/sitemap.ts` (dinámico) y `public/sitemap.xml` / `public/sitemap-0.xml` (estáticos)
- [ ] **9. Limpiar sitemap-0.xml** — Eliminar entradas de `sitemap.xml` y `robots.txt` que no son páginas indexables
- [ ] **10. Unificar robots.txt** — Resolver conflicto entre `app/robots.ts` y `public/robots.txt` (comportamiento opuesto)
- [ ] **11. Añadir URLs canónicas** — Definir `alternates: { canonical: '...' }` en el metadata de cada página
- [ ] **12. Corregir dominio en política de privacidad** — Reemplazar `arenasmoraabogados.com` por `arenasmorapol.com` en `app/politica-privacidad/page.tsx`

### 🟡 Medio impacto

- [ ] **13. Enlazado interno en el footer** — Los 6 servicios listados como texto plano deben ser `<Link>` con anchor text relevante
- [ ] **14. Añadir Blog y Contacto a la nav principal** — El Navbar solo tiene: Inicio, Nosotros, Servicios
- [ ] **15. Mejorar alt texts de imágenes** — Cambiar `alt="Logo"` por `alt="Logo Arenas Mora Abogados Barcelona"` en Navbar, HeroSection y Footer
- [ ] **16. Eliminar fuentes no usadas** — `Inter`, `Roboto` y `Lato` se importan pero nunca se usan (solo se usa `Open_Sans`)
- [ ] **17. H1 con keyword principal** — El H1 actual es solo "Arenas Mora & Asociados". Añadir la keyword: "Abogado en Barcelona | Arenas Mora & Asociados"
- [ ] **18. Imagen hero como `<Image>` con `priority`** — `/slider.avif` se carga como `backgroundImage` CSS; migrar a componente `<Image>` para beneficiarse de LCP hints
- [ ] **19. Añadir `changefreq` y `priority` al sitemap dinámico** — `app/sitemap.ts` no define estas propiedades
- [ ] **20. Añadir GA4** — El ID actual `AW-11563609495` es de Google Ads. Falta Google Analytics 4 (ID `G-XXXXXXXXXX`) para datos de tráfico completos

---

## Análisis Detallado

### 1. Metadatos Globales (`app/layout.tsx`)

**Implementado:**

- `title`: `'Abogado en Barcelona | Especialistas en Derecho Laboral'` — correcto, incluye keyword local + especialidad
- `description`: incluye keyword principal + CTA de consulta gratuita
- `keywords`: 17 keywords incluyendo variantes long-tail
- `metadataBase`: `https://arenasmorapol.com` — correcto, necesario para resolver URLs relativas en OG
- `lang="es"` en el `<html>` — correcto para SEO regional
- `authors`: definido

**Open Graph — INCOMPLETO:**

```ts
openGraph: {
  images: '/logo.png',  // Solo imagen, sin title, description, type, url
}
```

Faltan: `title`, `description`, `type: 'website'`, `url`, `siteName`, `locale: 'es_ES'`  
Además: la imagen referencia `/logo.png` pero en `/public/` solo existe `logo.avif`

**Open Graph completo que debería quedar:**

```ts
openGraph: {
  title: 'Abogado en Barcelona | Arenas Mora & Asociados',
  description: 'Asesoramiento jurídico personalizado en derecho laboral. ¡Primera consulta gratuita!',
  type: 'website',
  url: 'https://arenasmorapol.com',
  siteName: 'Arenas Mora & Asociados',
  locale: 'es_ES',
  images: [
    {
      url: '/logo.avif',
      width: 1200,
      height: 630,
      alt: 'Arenas Mora & Asociados — Abogados en Barcelona',
    },
  ],
},
```

**Twitter Card — MÍNIMO:**

```ts
twitter: {
  card: 'summary',            // debería ser 'summary_large_image'
  title: '...',
  description: '...'
  // Falta: images
}
```

---

### 2. Metadata por Página — PROBLEMA CRÍTICO

Todas las páginas de ruta usan `'use client'`, lo que impide exportar `metadata` estático:

| Ruta                   | `'use client'` | `export const metadata` | Estado                    |
| ---------------------- | -------------- | ----------------------- | ------------------------- |
| `/`                    | No             | No                      | Hereda layout (aceptable) |
| `/blog`                | ✗ Sí           | ✗ No                    | Solo metadata global      |
| `/contacto`            | ✗ Sí           | ✗ No                    | Solo metadata global      |
| `/nosotros`            | ✗ Sí           | ✗ No                    | Solo metadata global      |
| `/servicios`           | ✗ Sí           | ✗ No                    | Solo metadata global      |
| `/aviso-legal`         | No             | ✗ No                    | Solo metadata global      |
| `/cookies`             | No             | ✗ No                    | Solo metadata global      |
| `/politica-privacidad` | No             | ✗ No                    | Solo metadata global      |

**Solución:** Separar el componente interactivo (Client) del wrapper de página (Server). Ejemplo para `/servicios`:

```tsx
// app/servicios/page.tsx (Server Component)
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Servicios Jurídicos en Barcelona | Arenas Mora",
  description:
    "Derecho laboral, familiar y penal en Barcelona. Abogados especializados.",
  alternates: { canonical: "https://arenasmorapol.com/servicios" },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
```

---

### 3. Jerarquía de Encabezados — ERRORES SEMÁNTICOS

La homepage tiene **al menos 6 etiquetas H1**:

| Componente        | Problema                           | Corrección                                    |
| ----------------- | ---------------------------------- | --------------------------------------------- |
| `HeroSection`     | `<h1>Arenas Mora & Asociados</h1>` | Añadir keyword: "Abogado en Barcelona \| ..." |
| `AboutSection`    | `<h1>Pol Arenas Mora</h1>`         | → `<h2>`                                      |
| `FeaturesSection` | 4× `<h1>` para features            | → `<h3>`                                      |

**Estructura ideal:**

```
H1 (único): "Abogado en Barcelona | Arenas Mora & Asociados"
  H2: "Nuestros Servicios"
    H3: "Derecho Laboral", "Derecho de Familia"...
  H2: "Sobre Mí"
    H3: "Pol Arenas Mora"
  H2: "¿Necesita asesoramiento legal?"
```

---

### 4. JSON-LD / Schema Markup — AUSENTE

No existe ningún dato estructurado. Schemas necesarios:

**`LocalBusiness` / `LegalService` (homepage o layout):**

```json
{
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Arenas Mora & Asociados",
  "url": "https://arenasmorapol.com",
  "telephone": "+34 XXX XXX XXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Barcelona",
    "addressRegion": "Catalunya",
    "postalCode": "...",
    "addressCountry": "ES"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": "Barcelona"
}
```

**`Person` (página nosotros):**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pol Arenas Mora",
  "jobTitle": "Abogado",
  "worksFor": { "@type": "LegalService", "name": "Arenas Mora & Asociados" },
  "url": "https://arenasmorapol.com/nosotros"
}
```

**`FAQPage` (página servicios — componente `ServicesFAQ` ya existe):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una consulta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera consulta es gratuita."
      }
    }
  ]
}
```

---

### 5. Sitemap — CONFLICTO ENTRE DOS SISTEMAS

**Sistema 1 — Dinámico (`app/sitemap.ts`):**

- Incluye: `/`, `/servicios`, `/nosotros`, `/contacto`, `/blog`
- Sin `changefreq` ni `priority`
- No incluye páginas legales

**Sistema 2 — Estático (`public/sitemap-0.xml` + `public/sitemap.xml`):**

- Generado por `next-sitemap`, 10 URLs
- `priority: 0.7` para todas igual
- **Incluye `sitemap.xml` y `robots.txt` como páginas (error grave)**

**Solución recomendada:** Eliminar `next-sitemap` y los archivos estáticos. Usar solo `app/sitemap.ts` con:

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arenasmorapol.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://arenasmorapol.com/servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arenasmorapol.com/nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arenasmorapol.com/contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arenasmorapol.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
```

---

### 6. Robots — CONFLICTO ENTRE DOS ARCHIVOS

| Archivo             | Regla                                                    | Páginas legales |
| ------------------- | -------------------------------------------------------- | --------------- |
| `app/robots.ts`     | `Disallow: /politica-privacidad, /aviso-legal, /cookies` | No indexadas    |
| `public/robots.txt` | `Allow: /`                                               | Todas indexadas |

**Comportamiento opuesto.** Solución: eliminar `public/robots.txt` y mantener solo `app/robots.ts`.

---

### 7. Imágenes

| Imagen           | Componente   | Alt actual              | Alt recomendado                                   |
| ---------------- | ------------ | ----------------------- | ------------------------------------------------- |
| `/logo.avif`     | Navbar       | `"Logo"`                | `"Logo Arenas Mora Abogados Barcelona"`           |
| `/ley.png`       | HeroSection  | `"Logo"`                | `"Balanza de la justicia — Arenas Mora Abogados"` |
| `/ley.png`       | Footer       | `"Logo"`                | `"Logo Arenas Mora Abogados Barcelona"`           |
| `/polarenas.png` | AboutSection | `"Abogado profesional"` | Aceptable                                         |
| `/slider.avif`   | HeroSection  | — (fondo CSS)           | Migrar a `<Image priority>`                       |

---

### 8. Rendimiento y Core Web Vitals

**Problemas:**

- `images: { unoptimized: true }` en `next.config.js` — desactiva WebP/AVIF automático, redimensionado y lazy loading optimizado. **Impacto directo en LCP.**
- 3 fuentes importadas sin uso: `Inter`, `Roboto`, `Lato` en `app/layout.tsx`
- Imagen hero (`/slider.avif`) como `backgroundImage` CSS — no recibe `priority` de Next.js ni LCP preload hints

**Bien:**

- `@vercel/speed-insights` activo
- `@vercel/analytics` activo
- Scripts de Google cargados con `strategy="afterInteractive"`
- `next/font/google` para la fuente activa (evita CLS)

---

### 9. Analytics y Tracking

| Herramienta           | ID                            | Estado                         |
| --------------------- | ----------------------------- | ------------------------------ |
| Google Ads (gtag)     | `AW-11563609495`              | ✅ Activo                      |
| Vercel Analytics      | —                             | ✅ Activo                      |
| Vercel Speed Insights | —                             | ✅ Activo                      |
| Google Analytics 4    | `G-XXXXXXXXXX`                | ❌ No configurado              |
| Google Search Console | Verificación por archivo HTML | ✅ Dos propiedades verificadas |

---

### 10. URLs Canónicas

Ninguna página define canonical. Añadir en cada metadata:

```ts
alternates: {
  canonical: 'https://arenasmorapol.com/[ruta]',
}
```

---

### 11. Enlazado Interno

**Footer — servicios sin enlace:**

```tsx
// Actual (solo texto):
<li className="text-gray-400">Derecho Laboral</li>

// Debería ser:
<li><Link href="/servicios#laboral" className="text-gray-400 hover:text-white">Derecho Laboral</Link></li>
```

**Navbar — rutas que faltan:** Blog, Contacto

---

### 12. Inconsistencias de Contenido

1. `app/politica-privacidad/page.tsx` menciona `arenasmoraabogados.com` — debe ser `arenasmorapol.com`
2. `app/aviso-legal/page.tsx` tiene el componente nombrado `CookiesPage` (nombre duplicado con `/cookies`)
3. Open Graph image referencia `/logo.png` inexistente (existe `logo.avif`)

---

## Estado del Progreso

| Tarea                                          | Estado                                    | Archivo(s)                                         |
| ---------------------------------------------- | ----------------------------------------- | -------------------------------------------------- |
| Análisis inicial                               | ✅ Completado                             | —                                                  |
| Rama `seo-optimize` creada                     | ✅ Completado                             | —                                                  |
| Blog añadido a Navbar y Footer                 | ✅ Completado                             | `Navbar.tsx`, `footer.tsx`                         |
| Corregir H1 múltiples                          | ✅ Completado                             | `about-section.tsx`, `features-section.tsx`        |
| Open Graph completo                            | ✅ Completado                             | `app/layout.tsx`                                   |
| Twitter Card `summary_large_image`             | ✅ Completado                             | `app/layout.tsx`                                   |
| Eliminar fuentes no usadas (Inter/Roboto/Lato) | ✅ Completado                             | `app/layout.tsx`                                   |
| Unificar robots.txt                            | ✅ Completado                             | Eliminado `public/robots.txt`                      |
| Unificar sitemap + priority/changeFrequency    | ✅ Completado                             | `app/sitemap.ts`, eliminados `public/sitemap*.xml` |
| Desactivar `next-sitemap` postbuild            | ✅ Completado                             | `package.json`                                     |
| Alt texts descriptivos en imágenes             | ✅ Completado                             | `Navbar.tsx`, `hero-section.tsx`, `footer.tsx`     |
| Links internos en footer (servicios)           | ✅ Completado                             | `components/ui/footer.tsx`                         |
| Corregir dominio en política de privacidad     | ✅ Completado                             | `app/politica-privacidad/page.tsx`                 |
| Restaurar optimización de imágenes             | ✅ Completado                             | `next.config.js`                                   |
| Metadata única por página + canonical          | ✅ Completado                             | Todas las rutas en `app/*/page.tsx`                |
| JSON-LD LocalBusiness + LegalService           | ✅ Completado                             | `components/JsonLd.tsx` → `app/layout.tsx`         |
| JSON-LD Person                                 | ✅ Completado                             | `components/JsonLd.tsx` → `app/nosotros/page.tsx`  |
| JSON-LD FAQPage                                | ✅ Completado                             | `components/JsonLd.tsx` → `app/servicios/page.tsx` |
| H1 con keyword principal                       | ✅ Completado                             | `components/ui/hero-section.tsx`                   |
| Imagen hero como `<Image priority>`            | ✅ Completado                             | `components/ui/hero-section.tsx`                   |
| Renombrar componente `AvisoLegalPage`          | ✅ Completado                             | `app/aviso-legal/page.tsx`                         |
| Eliminar `next-sitemap.config.js`              | ✅ Completado                             | —                                                  |
| Configurar GA4                                 | ⏳ Pendiente — requiere ID `G-XXXXXXXXXX` | `app/layout.tsx`                                   |
