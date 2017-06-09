'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(key, apiSecret) {
		return jwt.verify(apiSecret, key);
	}

	codeSecret(tenant) {
		return jwt.sign({
			id: tenant.id,
			name: tenant.name
		}, tenant.apiKey);
	}
}

module.exports.TokenTestHelper = TokenTestHelper;