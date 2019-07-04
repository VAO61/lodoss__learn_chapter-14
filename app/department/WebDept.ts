const DeveloperFactory = require('../_factories/DeveloperFactory.ts');
const Department = require('./Department.ts');

class WebDept extends Department {
  constructor() {
    super();
  }

  hiredDevelopers() {
    this.developers.push(DeveloperFactory.createWebDeveloper());
  }
}

module.exports = WebDept;
