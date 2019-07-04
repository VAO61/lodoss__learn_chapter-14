const Project = require('./Project.ts');

class WebProject extends Project {
  constructor(difficulty) {
    super(difficulty);
  }
}

module.exports = WebProject;
