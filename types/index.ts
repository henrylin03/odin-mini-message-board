export interface NewMessage {
  text: string;
  user: string;
}

export interface StoredMessage extends NewMessage {
  id: string;
  added: Date;
}
