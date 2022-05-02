const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Define Routes

//Register
app.use("/api/users", require("./routes/users"));
//Login
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/", (req, res) => res.json({ msg: "Hello Contact manager!" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Started Server on port ${PORT}`));
