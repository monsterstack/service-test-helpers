'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(key, apiSecret) {
		return jwt.verify(apiSecret, key);
	}

	codeSecret(tenant) {
		return jwt.sign(tenant, tenant.apiKey);
	}
}

module.exports.TokenTestHelper = TokenTestHelper;