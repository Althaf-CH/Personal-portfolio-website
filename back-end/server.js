const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

const projects = [
  {
    title: "Kudumbashree Data Entry App",
    technology: "Java"
  },
  {
    title: "FitTrack",
    technology: "Flutter"
  },
  {
    title: "Cafe Menu App",
    technology: "Thunkable"
  },
  {
    title: "Personal Portfolio Website",
    technology: "HTML, CSS, JavaScript"
  },
  {
    title: "Photographer Portfolio Website",
    technology: "HTML, CSS, JavaScript"
  },
  {
    title: "Interactive Landing Page",
    technology: "HTML, CSS, JavaScript"
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.use(express.static(path.join(__dirname, "../front-end")));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
