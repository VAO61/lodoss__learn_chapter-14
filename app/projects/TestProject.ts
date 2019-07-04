const Project = require('./Project.ts');

class TestProject extends Project {
  constructor(difficulty) {
    super(difficulty);
  }
}

module.exports = TestProject;
