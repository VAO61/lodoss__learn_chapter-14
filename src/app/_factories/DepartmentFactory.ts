import { MobileDept } from '../department/MobileDept';
import { TestDept } from '../department/TestDept';
import { WebDept } from '../department/WebDept';

const DepartmentFactory = {
  createMobileDept() {
    return new MobileDept();
  },
  createTestDept() {
    return new TestDept();
  },
  createWebDept() {
    return new WebDept();
  }
};

export { DepartmentFactory };
