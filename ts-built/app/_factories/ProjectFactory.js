"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebProject_1 = require("../projects/WebProject");
var MobileProject_1 = require("../projects/MobileProject");
var ProjectFactory = {
    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    createRandomProject: function () {
        if (Math.random() > 0.5) {
            return new WebProject_1.WebProject(ProjectFactory.getRandom(1, 3));
        }
        else {
            return new MobileProject_1.MobileProject(ProjectFactory.getRandom(1, 3));
        }
    }
};
exports.ProjectFactory = ProjectFactory;
