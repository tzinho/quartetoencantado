"use server";

import { resend } from "@/lib/resend";

type SendEmail = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async ({ name, email, message }: SendEmail) => {
  try {
    const responseEmail = await resend.emails.send({
      from: "Quarteto encantando <onboarding@resend.dev>",
      to: [process.env.FROM_EMAIL as string],
      subject: "Contato",
      html: `<div>
        <p><strong>Nome: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mensagem: </strong> ${message}</p>
      </div>`,
    });
    console.log(responseEmail);
    return responseEmail;
  } catch (err) {
    console.error(err);
  }
};
