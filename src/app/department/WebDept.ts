import { DeveloperFactory } from '../_factories/DeveloperFactory';
import { Department } from './Department';

class WebDept extends Department {
  constructor() {
    super();
  }

  hiredDevelopers() {
    this.developers.push(DeveloperFactory.createWebDeveloper());
  }
}

export { WebDept };
