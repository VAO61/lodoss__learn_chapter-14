var Manager = require('./app/Manager.ts');
var IncomingData = require('./app/IncomingData.ts');
var manager = new Manager();
var incomingData = new IncomingData(manager, 500);
incomingData.start();
incomingData.statistic();
