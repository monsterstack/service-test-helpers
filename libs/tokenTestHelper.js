'use strict';
const Promise = require('promise');
const jwt = require('jsonwebtoken');

class TokenTestHelper {
	decodeSecret(key, apiSecret) {
		return jwt.verify(apiSecret, key);
	}

	codeTenantSecret(tenant) {
		var token = jwt.sign({
    	auth:  'magic',
    	agent: 'x-cdsp-tenant',
			scope: 'Tenant',
			name: tenant.name,
    	exp:   Math.floor(new Date().getTime()/1000) + 7*24*60*60 // Note: in seconds!
  	}, tenant.apiKey);  // secret is defined in the environment variable JWT_SECRET
  	return token;
	}

	codeApplicationSecret(application) {
		var token = jwt.sign({
    	auth:  'magic',
    	agent: 'x-cdsp-application',
			scope: 'Application',
			name: application.name,
    	exp:   Math.floor(new Date().getTime()/1000) + 7*24*60*60 // Note: in seconds!
  	}, application.apiKey);  // secret is defined in the environment variable JWT_SECRET
  	return token;
	}
}

module.exports.TokenTestHelper = TokenTestHelper;