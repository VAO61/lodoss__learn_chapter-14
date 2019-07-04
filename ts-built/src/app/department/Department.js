var Department = /** @class */ (function () {
    function Department() {
        this.projects = [];
        this.developers = [];
        this.doneProjects = [];
        this.statisticFiredDevelopers = 0;
    }
    /**
     * Возвращает массив незаняты разработчиков
     */
    Department.prototype.getUnBusyDevelopers = function () {
        return this.developers.filter(function (developer) { return !developer.isBusy(); });
    };
    /**
     * Возвращает список проектов, над которыми работа еще не начата
     */
    Department.prototype.getNotStartProjects = function () {
        var _this = this;
        return this.projects.filter(function (project) {
            return !_this.developers.some(function (developer) { return developer.project === project; });
        });
    };
    Department.prototype.firedDevelopers = function () {
        var developer = this.getUnBusyDeveloper();
        if (developer) {
            this.developers = this.developers.filter(function (item) {
                return item !== developer;
            });
            this.statisticFiredDevelopers++;
        }
    };
    Department.prototype.hiredDevelopers = function () {
        // Генерация исключения
        throw new Error('Метод hiredDevelopers не переопределен');
    };
    Department.prototype.getSafeLoad = function () {
        return this.getUnBusyDevelopers().length - this.projects.length;
    };
    Department.prototype.takeDevDonProjectsTransfer = function () {
        var clone = this.doneProjects.slice();
        this.doneProjects = [];
        return clone;
    };
    Department.prototype.getUnBusyDeveloper = function () {
        var array = this.getUnBusyDevelopers().sort(function (developer1, developer2) { return developer2.skill - developer1.skill; });
        return array.pop();
    };
    /**
     * Назначает минимум одного разработчика на один проект
     */
    Department.prototype.workAssign = function () {
        var unBusyDevelopers = this.getUnBusyDevelopers();
        var notStartProjects = this.getNotStartProjects();
        while (notStartProjects.length && unBusyDevelopers.length) {
            var project = notStartProjects.pop();
            var developer = unBusyDevelopers.pop();
            developer.startProject(project);
        }
    };
    /**
     * Приказывает каждому разработчику работать
     */
    Department.prototype.workStart = function () {
        this.developers.forEach(function (developer) { return developer.work(); });
    };
    Department.prototype.workEnd = function () {
        var _this = this;
        // Собирает готовые проекты
        this.projects
            .filter(function (project) { return project.progress >= project.difficulty; }) /* Массив проектов, над которыми завершена работа */
            .forEach(function (project) {
            project.progress = 0;
            project.difficulty = 1;
            var developers = _this.developers.filter(function (developer) { return developer.project === project; });
            developers.forEach(function (developer) {
                // Говорим разработичку остановить работу над проектом (об`Null`яем проект и повышаем skill на 1)
                developer.stopProject();
            });
            // Удаляем проект из списка проектов "в работе"
            _this.projects = _this.projects.filter(function (p) { return p !== project; });
            // Добавляем проект в массив завершенных проектов отдела
            _this.doneProjects.push(project);
        });
    };
    Department.prototype.work = function () {
        this.workAssign();
        this.workStart();
        this.workEnd();
        // console.log(this.statisticFiredDevelopers);
    };
    return Department;
}());
module.exports = Department;
