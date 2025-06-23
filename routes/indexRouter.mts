import { Router, type Request, type Response } from "express";
import {
  getAllMessages,
  postNewMessage,
} from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", (_req: Request, res: Response) => res.render("form"));
indexRouter.post("/new", postNewMessage);

export { indexRouter };
