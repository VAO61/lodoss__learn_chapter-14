const WebDeveloper = require('../developers/WebDeveloper.ts');
const MobileDeveloper = require('../developers/MobileDeveloper.ts');
const TestDeveloper = require('../developers/TestDeveloper.ts');

const DeveloperFactory = {
  createMobileDeveloper() {
    return new MobileDeveloper();
  },
  createTestDeveloper() {
    return new TestDeveloper();
  },
  createWebDeveloper() {
    return new WebDeveloper();
  }
};

module.exports = DeveloperFactory;
