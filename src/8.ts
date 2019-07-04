import { Manager } from './app/Manager';
import { IncomingData } from './app/IncomingData';

const manager = new Manager();
const incomingData = new IncomingData(manager, 500);
incomingData.start();
incomingData.statistic();
