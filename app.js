import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Routes (index)
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "views" });
  });

// Routes (Quiz)
  
app.get("/quiz", (req, res) => {
    res.sendFile("quiz.html", { root: "views" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
