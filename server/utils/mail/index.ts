import * as nodemailer from "nodemailer";

export async function sendMail(
  name: string,
  clientEmail: string,
  message: string,
  orderId?: string
) {
  const contactTemplate = `<div>
      <div>
        <strong>${name}</strong>
      </div>
      <div>
        <strong>${clientEmail}</strong>
      </div>
      <p>${message}</p>
    </div>`;

  const orderAcceptedTemplate = `<div>
      <div>Dzień dobry, Twoje zlecenie zostało przyjęte. Oto jego numer: <strong>${orderId}</strong></div>
   </div>`;

  const transporter = nodemailer.createTransport({
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: "BroPaint <bropaint@wp.pl>",
    to: orderId ? clientEmail : "bropaint@wp.pl",
    subject: `${name} kontakt`,
    text: message,
    html: orderId ? orderAcceptedTemplate : contactTemplate,
  });
}
