const Project = require('./Project.ts');

class MobileProject extends Project {
  constructor(difficulty) {
    super(difficulty);
  }
}

module.exports = MobileProject;
