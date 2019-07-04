"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MobileDept_1 = require("../department/MobileDept");
var TestDept_1 = require("../department/TestDept");
exports.TestDept = TestDept_1.TestDept;
var WebDept_1 = require("../department/WebDept");
var DepartmentFactory = {
    createMobileDept: function () {
        return new MobileDept_1.MobileDept();
    },
    createTestDept: function () {
        return new TestDept();
        // TODO: +++++++++++++++++++
    },
    createWebDept: function () {
        return new WebDept_1.WebDept();
    }
};
exports.DepartmentFactory = DepartmentFactory;
