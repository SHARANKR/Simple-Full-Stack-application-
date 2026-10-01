import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Express server! This means conncetion from the server is successful!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});