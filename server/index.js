const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/test", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
