const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Import routes
const bookRoute = require("./routes/api/book");
app.use("/api/book", bookRoute);

// Render PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server chạy trên port " + PORT));
