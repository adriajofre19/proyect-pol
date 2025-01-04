import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, email, phone, subject, message } = req.body;

    const emailContent = `
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden;">
                <!-- Encabezado -->
                <div style="background-color: #ca8a04; padding: 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nueva Solicitud de Consulta Legal</h1>
                </div>

                <!-- Contenido -->
                <div style="padding: 30px;">
                  <!-- Información del Cliente -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="color: #ca8a04; font-size: 20px; margin: 0 0 15px 0; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">
                      Información del Cliente
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; width: 120px;"><strong style="color: #666;">Nombre:</strong></td>
                        <td style="padding: 8px 0;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;"><strong style="color: #666;">Email:</strong></td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${email}" style="color: #ca8a04; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;"><strong style="color: #666;">Teléfono:</strong></td>
                        <td style="padding: 8px 0;">
                          <a href="tel:${phone}" style="color: #ca8a04; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- Detalles de la Consulta -->
                  <div style="margin-bottom: 30px;">
                    <h2 style="color: #ca8a04; font-size: 20px; margin: 0 0 15px 0; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">
                      Detalles de la Consulta
                    </h2>
                    <div style="background-color: #f8f8f8; border-radius: 4px; padding: 15px; margin-bottom: 20px;">
                      <strong style="color: #666;">Área Legal:</strong>
                      <div style="margin-top: 5px; color: #333;">${subject}</div>
                    </div>
                    <div style="background-color: #f8f8f8; border-radius: 4px; padding: 15px;">
                      <strong style="color: #666;">Mensaje:</strong>
                      <div style="margin-top: 5px; color: #333; white-space: pre-wrap;">${message}</div>
                    </div>
                  </div>

                  <!-- Pie de página -->
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
                    <p style="margin: 0;">Esta consulta fue enviada a través del formulario de contacto de la web.</p>
                    <p style="margin: 5px 0 0 0;">
                      Para responder, simplemente conteste a este correo electrónico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </body>
    `;

    const { data, error } = await resend.emails.send({
        from: `Nueva consulta <onboarding@resend.dev>`,
        to: ['adria.ordis@gmail.com'],
        subject: `Nueva consulta: ${subject}`,
        html: emailContent,
    });

    console.log(data);

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
};
