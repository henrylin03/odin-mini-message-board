import { type Request, type Response } from "express";
import { getMessageById as getMessageByIdFromDb } from "../db.mjs";
import CustomNotFoundError from "../errors/CustomNotFoundError.mjs";

async function getMessageById(req: Request, res: Response) {
  const { messageId } = req.params;
  const message = await getMessageByIdFromDb(messageId);

  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("message", {
    messageId: messageId,
    text: message.text,
    user: message.user,
    added: message.added,
  });
}

export { getMessageById };
