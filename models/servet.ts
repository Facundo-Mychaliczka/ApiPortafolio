import express, {Express} from "express"
import cors from "cors"
import emailRoute from "../routes/sendEmail.route"

export class Server {
    app: Express
    port: string | number | undefined
    constructor() {
        this.app = express()
        this.port = process.env.PORT 
        this.middlewares()
        this.route()
    }

    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }

    route(): void {
        this.app.use("/", emailRoute)
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`);
            
        })
    }
}