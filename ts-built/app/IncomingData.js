"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectFactory_1 = require("./_factories/ProjectFactory");
class IncomingData {
    constructor(manager, days) {
        this.manager = manager;
        this.days = days;
    }
    generateProjects() {
        const countProjects = ProjectFactory_1.ProjectFactory.getRandom(0, 4);
        const projects = [];
        for (let i = 0; i < countProjects; i++) {
            projects.push(ProjectFactory_1.ProjectFactory.createRandomProject());
        }
        return projects;
    }
    transferProjects() {
        this.manager.addProjects(this.generateProjects());
        this.manager.work();
    }
    start() {
        for (let i = 0; i < this.days; i++) {
            this.transferProjects();
        }
    }
    statistic() {
        console.log('Статистика:');
        console.log(`Выполненных проектов: ${this.manager.doneProjects.length}`);
        console.log(`Нанятых сотрудников: ${this.manager.statisticHiredDevelopers}`);
        console.log(`Уволенных сотрудников: ${this.manager.webDept.statisticFiredDevelopers +
            this.manager.mobileDept.statisticFiredDevelopers +
            this.manager.testDept.statisticFiredDevelopers}`);
    }
}
exports.IncomingData = IncomingData;
