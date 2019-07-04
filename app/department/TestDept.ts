const DeveloperFactory = require('../_factories/DeveloperFactory.ts');
const Department = require('./Department.ts');

class TestDept extends Department {
  constructor() {
    super();
  }

  hiredDevelopers() {
    this.developers.push(DeveloperFactory.createTestDeveloper());
  }
}

module.exports = TestDept;
