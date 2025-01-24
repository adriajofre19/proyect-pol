"use server"

interface GoogleReview {
    author_name: string
    rating: number
    text: string
    time: number
    profile_photo_url: string
}

interface GoogleResponse {
    result: {
        reviews: GoogleReview[]
    }
}

export async function getGoogleReviews() {
    const PLACE_ID = "17000768137272749319"
    const API_KEY = "AIzaSyBQp9G7ppiTfSioiH8jZWBFsR2QvUDZrJE"

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
            { next: { revalidate: 3600 } }, // Revalidar cada hora
        )

        if (!response.ok) {
            throw new Error("Error al obtener las reseñas")
        }

        const data: GoogleResponse = await response.json()

        return data.result.reviews.slice(0, 3).map((review) => ({
            text: review.text,
            author: review.author_name,
            date: new Date(review.time * 1000).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
            }),
            role: "Cliente verificado",
            rating: review.rating,
            photo: review.profile_photo_url,
        }))
    } catch (error) {
        console.error("Error fetching Google reviews:", error)
        // Devolver reseñas de respaldo en caso de error
        return [
            {
                text: "El mejor servicio legal que he recibido. Su atención personalizada y profesionalidad son excepcionales.",
                author: "Emma Cantón",
                date: "11 de Noviembre de 2023",
                role: "Cliente Particular",
                rating: 5,
            },
            {
                text: "Resolvieron mi caso con gran eficiencia y siempre me mantuvieron informado del proceso.",
                author: "Joan Quesada",
                date: "20 de Junio de 2024",
                role: "Cliente Particular",
                rating: 5,
            },
            {
                text: "Mi abogado de referencia para todo tipo de asuntos relativos al derecho laboral.",
                author: "Rafael Grau",
                date: "9 de Enero de 2025",
                role: "Empresario",
                rating: 5,
            },
        ]
    }
}

