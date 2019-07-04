"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebDeveloper_1 = require("../developers/WebDeveloper");
const MobileDeveloper_1 = require("../developers/MobileDeveloper");
const TestDeveloper_1 = require("../developers/TestDeveloper");
const DeveloperFactory = {
    createMobileDeveloper() {
        return new MobileDeveloper_1.MobileDeveloper();
    },
    createTestDeveloper() {
        return new TestDeveloper_1.TestDeveloper();
    },
    createWebDeveloper() {
        return new WebDeveloper_1.WebDeveloper();
    }
};
exports.DeveloperFactory = DeveloperFactory;
