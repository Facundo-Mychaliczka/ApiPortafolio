import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const password = process.env.EMAILPASS

const transporter = nodemailer.createTransport({
    service: "gmail",
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: "portfoliomychaliczka@gmail.com",
        pass: password,
    },
    from: "portfoliomychaliczka@gmail.com"
});

export const sendEmail = async (message: string, from: string): Promise<void> => {
                                                            
    const mailOptions = {
        from: '"Portfolio" portfoliomychaliczka@gmail.com',
        to: "facundomychaliczka@gmail.com",
        subject: "Mensaje desde portfolio",
        text: `
            Mensaje enviado con el email:
             ${from}
            Mensaje:
                ${message}
        `,
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo Enviado");
    } catch (error) {
        console.error("Error al enviar el correo electrónico", error);
    }
} 