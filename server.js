const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

const cors = require('cors');

appendFile.use(cors());

/*app.get("/", (req, res) => {
res.status(200).json({"body":"Bienvenue son mon API"});
})*/

app.use("/api", routes)

app.listen(3000, console.log("server is running ..."));

