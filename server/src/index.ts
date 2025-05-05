import express from "express";
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";
import articlesRoutes from "./routes/articles";
import botRoutes from "./routes/bot";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fitnessDataRoutes from "./routes/fitnessData";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to mongodb");

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use("/auth", authRoutes);
    app.use("/subs", subsRoutes);
    app.use("/articles", articlesRoutes);
    app.use("/bot", botRoutes);
    app.use("/fitdata", fitnessDataRoutes);

    app.listen(3000, () => {
      console.log(`Now listening to port 3000`);
    });
  })
  .catch((error) => {
    console.log({ error });
    throw new Error(error);
  });
