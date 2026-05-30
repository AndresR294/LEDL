'use strict';

const promisify = require('es6-promisify');
const jayson = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../');
const promiseUtils = require('../utils');

/**
 * Constructor for a Jayson Promise Client Tcp
 * @see Client
 * @class PromiseClientTcp
 * @extends ClientTcp
 * @return {PromiseClientTcp}
 */
const PromiseClientTcp = function(options) {
  if(!(this instanceof PromiseClientTcp)) {
    return new PromiseClientTcp(options);
  }
  jayson.Client.tcp.apply(this, arguments);
  this.request = promiseUtils.wrapClientRequestMethod(this.request.bind(this));
};
require('util').inherits(PromiseClientTcp, jayson.Client.tcp);

module.exports = PromiseClientTcp;
