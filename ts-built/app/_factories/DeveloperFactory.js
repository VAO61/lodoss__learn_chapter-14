"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebDeveloper_1 = require("../developers/WebDeveloper");
var MobileDeveloper_1 = require("../developers/MobileDeveloper");
var TestDeveloper_1 = require("../developers/TestDeveloper");
var DeveloperFactory = {
    createMobileDeveloper: function () {
        return new MobileDeveloper_1.MobileDeveloper();
    },
    createTestDeveloper: function () {
        return new TestDeveloper_1.TestDeveloper();
    },
    createWebDeveloper: function () {
        return new WebDeveloper_1.WebDeveloper();
    }
};
exports.DeveloperFactory = DeveloperFactory;
