import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js"
import { kpis } from "./data/data.js"

// Configurations
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use("/kpi", kpiRoutes)

// mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Add seed data one time only or as needed
    // await mongoose.connection.dropDatabase(); // don't do this if in production
    // KPI.insertMany(kpis); // seed the database with our existing data
  })
  .catch((error) => console.log(`${error} did not connect`))