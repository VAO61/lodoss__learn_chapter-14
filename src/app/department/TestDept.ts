import { DeveloperFactory } from '../_factories/DeveloperFactory';
import { Department } from './Department';

class TestDept extends Department {
  constructor() {
    super();
  }

  hiredDevelopers() {
    this.developers.push(DeveloperFactory.createTestDeveloper());
  }
}

export { TestDept };
