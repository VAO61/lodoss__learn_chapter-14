var WebDeveloper = require('../developers/WebDeveloper.ts');
var MobileDeveloper = require('../developers/MobileDeveloper.ts');
var TestDeveloper = require('../developers/TestDeveloper.ts');
var DeveloperFactory = {
    createMobileDeveloper: function () {
        return new MobileDeveloper();
    },
    createTestDeveloper: function () {
        return new TestDeveloper();
    },
    createWebDeveloper: function () {
        return new WebDeveloper();
    }
};
module.exports = DeveloperFactory;
