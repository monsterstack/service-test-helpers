'use strict';
const Promise = require('promise');
const startTestService = require('discovery-test-tools').startTestService;

class ServiceTestHelper {
  startTestService(name, options) {
    let p = new Promise((resolve, reject) => {
      startTestService(name, options, (error, server) => {
        resolve(server);
      });
    });

    return p;
  }
}

const Assert = {
  assertFieldExists: (field, obj, message, done) => {
    if (obj[field] === undefined) {
      if (message === undefined) message = '';
      done(new Error(message));
    } else {
      done();
    }
    return;
  }
}

module.exports.ServiceTestHelper = ServiceTestHelper;
module.exports.Assert = Assert;