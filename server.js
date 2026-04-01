import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import userRoutes from "./routes/userRoutes.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// bu joyda authRoutes ulanishi shart
app.use("/auth", authRoutes);
app.use("/quotes", quoteRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
