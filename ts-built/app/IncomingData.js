"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectFactory_1 = require("./_factories/ProjectFactory");
var IncomingData = /** @class */ (function () {
    function IncomingData(manager, days) {
        this.manager = manager;
        this.days = days;
    }
    IncomingData.prototype.generateProjects = function () {
        var countProjects = ProjectFactory_1.ProjectFactory.getRandom(0, 4);
        var projects = [];
        for (var i = 0; i < countProjects; i++) {
            projects.push(ProjectFactory_1.ProjectFactory.createRandomProject());
        }
        return projects;
    };
    IncomingData.prototype.transferProjects = function () {
        this.manager.addProjects(this.generateProjects());
        this.manager.work();
    };
    IncomingData.prototype.start = function () {
        for (var i = 0; i < this.days; i++) {
            this.transferProjects();
        }
    };
    IncomingData.prototype.statistic = function () {
        console.log('Статистика:');
        console.log("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432: " + this.manager.doneProjects.length);
        console.log("\u041D\u0430\u043D\u044F\u0442\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432: " + this.manager.statisticHiredDevelopers);
        console.log("\u0423\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432: " + (this.manager.webDept.statisticFiredDevelopers +
            this.manager.mobileDept.statisticFiredDevelopers +
            this.manager.testDept.statisticFiredDevelopers));
    };
    return IncomingData;
}());
exports.IncomingData = IncomingData;
