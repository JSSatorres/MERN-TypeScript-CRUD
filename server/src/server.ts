import express from "express";
import videoRouter from "./routes/videos-routes";
import morgan from "morgan"
import cors from "cors"

export const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({ extended:false}))

app.use(videoRouter)