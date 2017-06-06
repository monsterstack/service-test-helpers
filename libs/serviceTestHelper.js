'use strict';
const uuid = require('node-uuid');
const Promise = require('promise');
const ApiBinding = require('discovery-proxy').ApiBinding;

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


  newMinimalGenericServiceDescriptor(listeningPort) {
    return {
        endpoint: `http://localhost:${listeningPort}`,
        schemaRoute: '/swagger.json',
        _id: uuid.v1(),
    };
  }

  bindToGenericService(listeningPort) {
    let service = this.newMinimalGenericServiceDescriptor(listeningPort);
    let apiBinding = new ApiBinding(service);
    return apiBinding.bind();
  }
  
};

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
  },

  assertNotEquals: (actual, expected, message) => {
    if (actual !== expected) {
      return;
    } else {
      if (message === undefined) message = '';
      throw new Error(message);
    }
  }
}

module.exports.ServiceTestHelper = ServiceTestHelper;
module.exports.Assert = Assert;