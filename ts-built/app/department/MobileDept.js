"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DeveloperFactory_1 = require("../_factories/DeveloperFactory");
var Department_1 = require("./Department");
var MobileDept = /** @class */ (function (_super) {
    __extends(MobileDept, _super);
    function MobileDept() {
        return _super.call(this) || this;
    }
    /**
     * Расчитывает допустимую нагрузку на отдел
     */
    MobileDept.prototype.getSafeLoad = function () {
        var sum = 0;
        for (var i = 0; i < this.projects.length; i++) {
            sum += this.projects[i].difficulty;
        }
        return this.getUnBusyDevelopers().length - sum;
    };
    MobileDept.prototype.hiredDevelopers = function () {
        // this.developers.push(DeveloperFactory.createMobileDeveloper());
        this.developers.push(DeveloperFactory_1.DeveloperFactory.createMobileDeveloper());
    };
    MobileDept.prototype.work = function () {
        var _this = this;
        this.workAssign();
        // Дополнительные разработчики на проект (этот кусок кода специфичен для отдела мобильной разработки)
        this.getUnBusyDevelopers().forEach(function (developer) {
            _this.projects.forEach(function (project) {
                var count = _this.developers.filter(function (item) {
                    return item.project === project;
                }).length;
                if (project.difficulty > count) {
                    developer.startProject(project);
                }
            });
        });
        this.workStart();
        this.workEnd();
    };
    return MobileDept;
}(Department_1.Department));
exports.MobileDept = MobileDept;
