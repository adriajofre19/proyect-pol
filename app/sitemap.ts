import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://arenasmorapol.com',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://arenasmorapol.com/servicios',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://arenasmorapol.com/nosotros',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://arenasmorapol.com/contacto',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://arenasmorapol.com/blog',
            lastModified: new Date().toISOString(),
        },
    ]
}