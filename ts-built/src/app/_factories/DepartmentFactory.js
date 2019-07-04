var WebDept = require('../department/WebDept.ts');
var MobileDept = require('../department/MobileDept.ts');
var TestDept = require('../department/TestDept.ts');
var DepartmentFactory = {
    createWebDept: function () {
        return new WebDept();
    },
    createMobileDept: function () {
        return new MobileDept();
    },
    createTestDept: function () {
        return new TestDept();
    }
};
module.exports = DepartmentFactory;
