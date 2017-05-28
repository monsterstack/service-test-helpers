'use strict';
import startTestService from 'discovery-test-tools';
import Promise from 'promise';

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