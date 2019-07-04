"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeveloperFactory_1 = require("../_factories/DeveloperFactory");
const Department_1 = require("./Department");
class TestDept extends Department_1.Department {
    constructor() {
        super();
    }
    hiredDevelopers() {
        this.developers.push(DeveloperFactory_1.DeveloperFactory.createTestDeveloper());
    }
}
exports.TestDept = TestDept;
