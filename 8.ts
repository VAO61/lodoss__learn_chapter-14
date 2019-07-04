const Manager = require('./app/Manager.ts');
const IncomingData = require('./app/IncomingData.ts');

const manager = new Manager();
const incomingData = new IncomingData(manager, 500);
incomingData.start();
incomingData.statistic();
