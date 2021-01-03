exports.__esModule = true;
const redux_1 = require('redux');
const reducer_1 = require('./reducer');

const store = redux_1.createStore(reducer_1.default);
exports.default = store;
