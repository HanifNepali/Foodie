const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "dist", "index.html"));
});

app.listen(process.env.PORT || 5000);
