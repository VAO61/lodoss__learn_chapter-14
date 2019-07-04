"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeveloperFactory_1 = require("../_factories/DeveloperFactory");
const Department_1 = require("./Department");
class MobileDept extends Department_1.Department {
    constructor() {
        super();
    }
    /**
     * Расчитывает допустимую нагрузку на отдел
     */
    getSafeLoad() {
        let sum = 0;
        for (let i = 0; i < this.projects.length; i++) {
            sum += this.projects[i].difficulty;
        }
        return this.getUnBusyDevelopers().length - sum;
    }
    hiredDevelopers() {
        // this.developers.push(DeveloperFactory.createMobileDeveloper());
        this.developers.push(DeveloperFactory_1.DeveloperFactory.createMobileDeveloper());
    }
    work() {
        this.workAssign();
        // Дополнительные разработчики на проект (этот кусок кода специфичен для отдела мобильной разработки)
        this.getUnBusyDevelopers().forEach(developer => {
            this.projects.forEach(project => {
                const count = this.developers.filter(function (item) {
                    return item.project === project;
                }).length;
                if (project.difficulty > count) {
                    developer.startProject(project);
                }
            });
        });
        this.workStart();
        this.workEnd();
    }
}
exports.MobileDept = MobileDept;
