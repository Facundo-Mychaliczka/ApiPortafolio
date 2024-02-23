import { Router } from "express";
import { check } from "express-validator";
import { collectErrors } from "../middlewares/collectErrors";
import { getMessage } from "../controllers/auth.controller";

const router = Router()

router.post(
    "/sendEmail",
    [
        check("message", "El campo Message es obligatorio.").not().isEmpty(),
        check("email", "El Email es obligatorio").isEmail(),
        collectErrors
    ],
    getMessage
)

export default router