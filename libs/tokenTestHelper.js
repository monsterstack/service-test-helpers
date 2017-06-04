'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(key, apiSecret) {
		return jwt.verify(apiSecret, key);
	}
}

module.exports.TokenTestHelper = TokenTestHelper;