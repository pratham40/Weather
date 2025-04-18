import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import weatherRoute from "./routes/weather.js";

const app = express();

app.use(express.static("build"))

app.use(cors())

app.use(express.json())

app.use("/weather",weatherRoute)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
