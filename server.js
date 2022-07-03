//Entry into the server
const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

//Home endpoint
app.get("/", (req, res) => res.json({ msg: "Welcome to Contact manager " }));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//Port Definition and Running the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
