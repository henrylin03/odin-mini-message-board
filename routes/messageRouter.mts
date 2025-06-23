import { Router, type Request, type Response } from "express";
import { getMessageById } from "../controllers/messageController.mjs";

const messageRouter = Router();

messageRouter.get("/:messageId", getMessageById);

messageRouter.get("/", (_req: Request, res: Response) => {
  res.redirect("/");
});

export { messageRouter };
