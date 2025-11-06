const { randomUUID } = require("crypto");

const messages = [
	{ id: randomUUID(), text: "Hi there!", user: "Amando", added: new Date() },
	{
		id: randomUUID(),
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

const getMessageById = async (messageId) =>
	messages.find((message) => message.id === messageId);

const getAllMessages = async () => messages;

const addNewMessage = async (messageData) => {
	const newMessage = {
		id: randomUUID(),
		text: messageData.text,
		user: messageData.user,
		added: new Date(),
	};

	messages.push(newMessage);

	return newMessage;
};

module.exports = { getMessageById, getAllMessages, addNewMessage };
