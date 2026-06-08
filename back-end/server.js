const express = require("express");
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});