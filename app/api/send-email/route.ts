import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/constants/site";
// Escapa caracteres HTML para evitar XSS en el cuerpo del email
function escapeHtml(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la petición inválido" },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = body as Record<
    string,
    unknown
  >;

  // Validación de campos obligatorios
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios" },
      { status: 400 },
    );
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(String(email))) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  // Límite de longitud para evitar abusos
  if (
    String(name).length > 200 ||
    String(message).length > 5000 ||
    String(subject).length > 200
  ) {
    return NextResponse.json(
      { error: "Campos demasiado largos" },
      { status: 400 },
    );
  }

  // Sanitización — escapar HTML en todos los campos antes de inyectarlos en el template
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const emailContent = `
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="background-color: #ca8a04; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nueva Solicitud de Consulta Legal</h1>
          </div>
          <div style="padding: 30px;">
            <div style="margin-bottom: 30px;">
              <h2 style="color: #ca8a04; font-size: 20px; margin: 0 0 15px 0; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">
                Información del Cliente
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 120px;"><strong style="color: #666;">Nombre:</strong></td>
                  <td style="padding: 8px 0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong style="color: #666;">Email:</strong></td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${safeEmail}" style="color: #ca8a04; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong style="color: #666;">Teléfono:</strong></td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${safePhone}" style="color: #ca8a04; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
              </table>
            </div>
            <div style="margin-bottom: 30px;">
              <h2 style="color: #ca8a04; font-size: 20px; margin: 0 0 15px 0; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">
                Detalles de la Consulta
              </h2>
              <div style="background-color: #f8f8f8; border-radius: 4px; padding: 15px; margin-bottom: 20px;">
                <strong style="color: #666;">Área Legal:</strong>
                <div style="margin-top: 5px; color: #333;">${safeSubject}</div>
              </div>
              <div style="background-color: #f8f8f8; border-radius: 4px; padding: 15px;">
                <strong style="color: #666;">Mensaje:</strong>
                <div style="margin-top: 5px; color: #333; white-space: pre-wrap;">${safeMessage}</div>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p style="margin: 0;">Esta consulta fue enviada a través del formulario de contacto de la web.</p>
              <p style="margin: 5px 0 0 0;">Para responder, simplemente conteste a este correo electrónico.</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  `;

  const { data, error } = await resend.emails.send({
    from: "Nueva consulta <onboarding@resend.dev>",
    to: [CONTACT_EMAIL],
    subject: `Nueva consulta: ${safeSubject}`,
    html: emailContent,
  });

  if (error) {
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 },
    );
  }

  return NextResponse.json(data, { status: 200 });
}
