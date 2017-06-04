'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(secret, apiSecret) {
		let p = new Promise((resolve, reject) => {
			jwt.verify(secret, apiSecret, (err, decoded) => {
				if (err) reject(err);
				else resolve(decoded);
			});
		});
		return p;
	}
}

module.exports.TokenTestHelper = TokenTestHelper;