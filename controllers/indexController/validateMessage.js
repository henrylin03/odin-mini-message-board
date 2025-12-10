const { body } = require("express-validator");

const validateMessage = [
	body("username")
		.trim()
		.isLength({ min: 1, max: 32 })
		.withMessage("Username must be between 1 and 32 characters"),

	body("text")
		.trim()
		.isLength({ min: 1, max: 280 })
		.withMessage("Message must be between 1 and 280 characters"),
];

module.exports = { validateMessage };
