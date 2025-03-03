const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const corsOptions = require("./config/corsConfig");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// Static dosyalar
app.use(express.static(path.join(__dirname, "views")));

// Form route'u
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Hata yakalama
app.use(errorHandler);

module.exports = app;
