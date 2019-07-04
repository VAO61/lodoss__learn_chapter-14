var DepartmentFactory = require('./_factories/DepartmentFactory.ts');
var WebProject = require('./projects/WebProject.ts');
var MobileProject = require('./projects/MobileProject.ts');
// Не используются пока
// const TestProject = require('./projects/TestProject.ts');
// const WebDeveloper = require('./developers/WebDeveloper.ts');
// const MobileDeveloper = require('./developers/MobileDeveloper.ts');
// const TestDeveloper = require('./developers/TestDeveloper.ts');
var Manager = /** @class */ (function () {
    function Manager() {
        this.webDept = DepartmentFactory.createWebDept();
        this.mobileDept = DepartmentFactory.createMobileDept();
        this.testDept = DepartmentFactory.createTestDept();
        this.pendingProjects = []; // ожидающие принятия проекты
        this.devDoneProjects = [];
        this.doneProjects = [];
        this.statisticHiredDevelopers = 0;
    }
    Manager.prototype.hiredDevelopers = function () {
        var _this = this;
        // Найм сотрудников. Минимум один разработчик на один проект
        this.pendingProjects.forEach(function (project) {
            if (project instanceof WebProject) {
                _this.webDept.hiredDevelopers();
                _this.statisticHiredDevelopers++;
            }
            else if (project instanceof MobileProject) {
                _this.mobileDept.hiredDevelopers();
                _this.statisticHiredDevelopers++;
            }
        });
        this.devDoneProjects.forEach(function () {
            _this.testDept.hiredDevelopers();
            _this.statisticHiredDevelopers++;
        });
    };
    Manager.prototype.generatePendingProjects = function (projects) {
        var _a;
        // добавление проектов от заказчика в массив невыполненных проектов у директора (склад проектов директора)
        (_a = this.pendingProjects).push.apply(_a, projects);
    };
    Manager.prototype.addProjects = function (projects) {
        this.generatePendingProjects(projects);
    };
    Manager.prototype.work = function () {
        var _a;
        // Выполняется функция найма сотрудников
        this.hiredDevelopers();
        // Без временного массива не обойтись для решения поставленной ментором задачи (while + .sort + .pop) без потери проектов, не попавших в разработку
        var tmp = [];
        // распихиваем проекты со склада по отделам мобильной и веб разработок
        this.pendingProjects.sort(function (a, b) { return a.difficulty - b.difficulty; });
        while (this.pendingProjects.length > 0) {
            // Забираем проекты из отсортированного массива по одному
            var project = this.pendingProjects.pop();
            if (project instanceof WebProject &&
                project.difficulty <= this.webDept.getSafeLoad()) {
                this.webDept.projects.push(project);
            }
            else if (project instanceof MobileProject &&
                project.difficulty <= this.mobileDept.getSafeLoad()) {
                this.mobileDept.projects.push(project);
            }
            else {
                // Пушим во временное хранилище чтобы не потерять проект и отдать его в след. итерацию
                tmp.push(project);
            }
        }
        // Обновляем массив проектов для реализации в последующий день
        (_a = this.pendingProjects).push.apply(_a, tmp);
        // забираем готовые проекты у отделов веб и мобильной разработки, и передаем их тестировщикам
        this.transferToTestDeptProjects();
        // забирает у отдела тестирования заерщенные проекты и скадируем в список завершенных
        this.getCompletedProjects();
        // приказ работать всем отделам
        this.webDept.work();
        this.mobileDept.work();
        this.testDept.work();
        // приказ увольнять сотрудников
        this.webDept.firedDevelopers();
        this.mobileDept.firedDevelopers();
        this.testDept.firedDevelopers();
    };
    /**
     * Забирает у отделов Web и Mobile завершенные проекты, и отдает их по возможности в отдел тестирования
     */
    Manager.prototype.transferToTestDeptProjects = function () {
        var _a, _b;
        (_a = this.devDoneProjects).push.apply(_a, this.webDept.takeDevDonProjectsTransfer().concat(this.mobileDept.takeDevDonProjectsTransfer()));
        var tmp = [];
        while (this.devDoneProjects.length > 0) {
            var project = this.devDoneProjects.pop();
            if (this.testDept.getSafeLoad() > 0) {
                this.testDept.projects.push(project);
            }
            else {
                tmp.push(project);
            }
        }
        (_b = this.devDoneProjects).push.apply(_b, tmp);
    };
    Manager.prototype.getCompletedProjects = function () {
        var _a;
        // забирает у отдела тестирования заерщенные проекты и скадируем в список завершенных
        (_a = this.doneProjects).push.apply(_a, this.testDept.takeDevDonProjectsTransfer());
    };
    return Manager;
}());
module.exports = Manager;
