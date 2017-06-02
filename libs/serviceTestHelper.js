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
  assertFieldExists: (field, obj, message) => {
    if (obj[field] === undefined) {
      if (message === undefined) message = '';
      throw new Error(message);
    } 
    return;
  },

  assertEquals: (actual, expected, message) => {
    if (actual === expected) {
      return;
    } else {
      if (message === undefined) message = '';
      throw new Error(message);
    }
  }
}

module.exports.ServiceTestHelper = ServiceTestHelper;
module.exports.Assert = Assert;