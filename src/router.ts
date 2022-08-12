import { Router, Request, Response } from "express";
import { createMovie, findMoviebyID, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController";

import { validate } from "./middleware/handleValidation";
import { movieValidation } from "./middleware/movieValidation";

const router = Router();

export default router
    .get("/test", (req: Request, resp: Response) => {
        resp.status(200).send("API Working!");
    })
    .post("/movie", movieValidation(), validate, createMovie)
    .get("/movie/:id", findMoviebyID)
    .get("/movie", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieValidation(), validate, updateMovie);