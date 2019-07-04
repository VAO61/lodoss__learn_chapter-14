import { MobileDept } from '../department/MobileDept';
export { TestDept } from '../department/TestDept';
import { WebDept } from '../department/WebDept';

const DepartmentFactory = {
  createMobileDept() {
    return new MobileDept();
  },
  createTestDept() {
    return new TestDept();
    // TODO: +++++++++++++++++++
  },
  createWebDept() {
    return new WebDept();
  }
};

export { DepartmentFactory };
