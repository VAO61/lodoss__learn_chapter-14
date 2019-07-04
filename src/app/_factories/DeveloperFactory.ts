import { WebDeveloper } from '../developers/WebDeveloper';
import { MobileDeveloper } from '../developers/MobileDeveloper';
import { TestDeveloper } from '../developers/TestDeveloper';

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

export { DeveloperFactory };
