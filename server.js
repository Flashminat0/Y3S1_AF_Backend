import express from "express";
import {readdirSync} from "fs";

const cors = require("cors");
const app = express();

app.use(express.json({limit: "5mb"}));

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
