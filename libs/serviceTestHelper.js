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

module.exports.ServiceTestHelper = ServiceTestHelper;