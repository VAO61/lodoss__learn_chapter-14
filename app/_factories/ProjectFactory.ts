const WebProject = require('../projects/WebProject.ts');
const MobileProject = require('../projects/MobileProject.ts');

const ProjectFactory = {
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  createRandomProject() {
    if (Math.random() > 0.5) {
      return new WebProject(ProjectFactory.getRandom(1, 3));
    } else {
      return new MobileProject(ProjectFactory.getRandom(1, 3));
    }
  }
};

module.exports = ProjectFactory;
