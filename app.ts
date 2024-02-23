import { Server } from "./models/servet";
import dotenv from "dotenv"

dotenv.config();

const server = new Server();

server.listen()