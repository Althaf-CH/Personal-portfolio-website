const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://portfolio_db_user:portfolio@portfolio-cluster.ctex9nh.mongodb.net/?appName=portfolio-cluster";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("portfolio");

    await db.collection("projects").insertOne({
      title: "Personal Portfolio Website",
      technology: "HTML, CSS, JavaScript, Node.js"
    });

    console.log("Database connected successfully");
    console.log("Document inserted");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();