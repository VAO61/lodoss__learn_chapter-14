"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MobileDept_1 = require("../department/MobileDept");
var TestDept_1 = require("../department/TestDept");
exports.TestDept = TestDept_1.TestDept;
const WebDept_1 = require("../department/WebDept");
const DepartmentFactory = {
    createMobileDept() {
        return new MobileDept_1.MobileDept();
    },
    createTestDept() {
        return new TestDept();
        // TODO: +++++++++++++++++++
    },
    createWebDept() {
        return new WebDept_1.WebDept();
    }
};
exports.DepartmentFactory = DepartmentFactory;
