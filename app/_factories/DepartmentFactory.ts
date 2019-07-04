const WebDept = require('../department/WebDept.ts');
const MobileDept = require('../department/MobileDept.ts');
const TestDept = require('../department/TestDept.ts');

const DepartmentFactory = {
  createWebDept() {
    return new WebDept();
  },
  createMobileDept() {
    return new MobileDept();
  },
  createTestDept() {
    return new TestDept();
  }
};

module.exports = DepartmentFactory;
