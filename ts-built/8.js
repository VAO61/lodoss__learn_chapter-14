"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = require("./app/Manager");
var IncomingData_1 = require("./app/IncomingData");
var manager = new Manager_1.Manager();
var incomingData = new IncomingData_1.IncomingData(manager, 500);
incomingData.start();
incomingData.statistic();
