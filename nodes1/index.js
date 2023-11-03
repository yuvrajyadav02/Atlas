const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv").config();
const Router = require("../nodes1/routes/userRoutes");

const data = require("./data");
const app = express();
connectDB();

app.use(bodyParser.json());
// dotenv.config();

// app.get("/", (req, res) => {
//   res.send(`server is running.........`);
// });

// app.get("/api/data", (req, res) => {
//   res.json(data);
// });

// app.get("/api/data/:id", (req, res) => {
//   const result = data.find((n) => n.id.toString() == req.params.id);
//   res.send(result);
// });

// app.post("/api/data/");
const PORT = process.env.PORT || 5656;

app.use(cors());
app.use("/api/users", Router);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
