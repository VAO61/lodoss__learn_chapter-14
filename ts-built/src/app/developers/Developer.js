var Developer = /** @class */ (function () {
    function Developer() {
        this.skill = 0;
        this.project = null;
        this.unBusyCount = 0;
    }
    // ты занят?
    Developer.prototype.isBusy = function () {
        return !!this.project;
    };
    Developer.prototype.startProject = function (project) {
        // Назначаем проект разработчику
        this.project = project;
        // Обнуляем счетчик дней простоя разработчика
        this.unBusyCount = 0;
    };
    Developer.prototype.stopProject = function () {
        this.project = null;
        this.skill++;
    };
    Developer.prototype.work = function () {
        if (this.project !== null) {
            // Увеличиваем прогресс выполнения проекта
            this.project.progress++;
        }
        else {
            // Увеличиваем простой на 1 (день) если сотруднику не назначен проект
            this.unBusyCount++;
        }
    };
    return Developer;
}());
module.exports = Developer;
