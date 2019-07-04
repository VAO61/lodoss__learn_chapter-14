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
var WebDept = /** @class */ (function (_super) {
    __extends(WebDept, _super);
    function WebDept() {
        return _super.call(this) || this;
    }
    WebDept.prototype.hiredDevelopers = function () {
        this.developers.push(DeveloperFactory_1.DeveloperFactory.createWebDeveloper());
    };
    return WebDept;
}(Department_1.Department));
exports.WebDept = WebDept;
