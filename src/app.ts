//Env variables
require("dotenv").config();

import express from "express";
import config from "config";

//Routes
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddeware from "./middleware/morganMiddleware";

//DB
import db from "../config/db";

const app = express();

//JSON
app.use(express.json());

app.use(morganMiddeware);

app.use("/api/", router);

//app port
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    Logger.info(`A aplicação está funcionando na porta: ${port}`);
});

