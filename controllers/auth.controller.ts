import { Request, Response } from "express";
import { sendEmail } from "../mailer/mailer";


export const getMessage = async (req: Request, res: Response) => {
    const {message, email} = req.body

    await sendEmail(message, email)

    res.status(201).json( {
        msg: "¡Muchas gracias por su mensaje, lo leeré a la brevedad!"
    })
}