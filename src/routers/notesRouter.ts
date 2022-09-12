import { Router } from "express";
import {createNotes, deleteNotes, findAllNotes, findNotesById} from "../controllers/notesController";
import schemaValidateMiddleware from "../middlewares/schemaValidateMiddleware";
import createSchema from '../schemas/notesSchemas/notesCreate'
import deleteSchema from "../schemas/deleteSchemas";


const notesRouter = Router();

notesRouter.post("/notes",schemaValidateMiddleware(createSchema), createNotes);
notesRouter.get("/notes", findAllNotes);
notesRouter.get("/notes/:id", findNotesById);
notesRouter.delete("/notes/:id",schemaValidateMiddleware(deleteSchema), deleteNotes);

export default notesRouter