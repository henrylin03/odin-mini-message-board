import { type Request, type Response } from "express";
import {
  getAllMessages as getAllMessagesFromDb,
  addNewMessage,
} from "../db.mjs";

async function getAllMessages(_req: Request, res: Response) {
  const messages = await getAllMessagesFromDb();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function postNewMessage(req: Request, res: Response) {
  const { messageUser, messageText } = req.body;
  await addNewMessage({ user: messageUser, text: messageText });
  res.redirect("/");
}

export { getAllMessages, postNewMessage };
