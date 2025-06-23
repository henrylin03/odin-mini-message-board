import { randomUUID } from "crypto";
import { NewMessage, StoredMessage } from "./types";

const messages: Array<StoredMessage> = [
  { id: randomUUID(), text: "Hi there!", user: "Amando", added: new Date() },
  {
    id: randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export const getMessageById = async (messageId: string) =>
  messages.find((message) => message.id === messageId);

export const getAllMessages = async () => messages;

export const addNewMessage = async (messageData: NewMessage) => {
  const newMessage: StoredMessage = {
    id: randomUUID(),
    text: messageData.text,
    user: messageData.user,
    added: new Date(),
  };

  messages.push(newMessage);

  return newMessage;
};
