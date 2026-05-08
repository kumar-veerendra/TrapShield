const express = require("express");
const cors = require("cors");

const urlRoutes = require("./routes/urlRoutes");
const smsRoutes = require("./routes/smsRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/url", urlRoutes);
app.use("/api/sms", smsRoutes);
app.use("/api/email", emailRoutes);

module.exports = app;