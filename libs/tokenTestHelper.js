'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(key, apiSecret) {
		return jwt.verify(key, apiSecret);
	}
}

module.exports.TokenTestHelper = TokenTestHelper;