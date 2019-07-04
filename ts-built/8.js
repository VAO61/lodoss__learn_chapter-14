"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = require("./app/Manager");
const IncomingData_1 = require("./app/IncomingData");
const manager = new Manager_1.Manager();
const incomingData = new IncomingData_1.IncomingData(manager, 500);
incomingData.start();
incomingData.statistic();
