
var config = require('./config.json');
var _ = require('lodash');

const defualtConfig  = config.development;
const enviroment = process.env.NODE_ENV || 'development';
const enviromentConfig = config[enviroment];
const finalConfig = _.merge(defualtConfig, enviromentConfig);

global.gConfig = finalConfig;

console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
