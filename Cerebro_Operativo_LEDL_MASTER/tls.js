'use strict';

const promisify = require('es6-promisify');
const jayson = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../');
const promiseUtils = require('../utils');

/**
 * Constructor for a Jayson Promise Client Tls
 * @see Client
 * @class PromiseClientTls
 * @extends ClientTls
 * @return {PromiseClientTls}
 */
const PromiseClientTls = function(options) {
  if(!(this instanceof PromiseClientTls)) {
    return new PromiseClientTls(options);
  }
  jayson.Client.tls.apply(this, arguments);
  this.request = promiseUtils.wrapClientRequestMethod(this.request.bind(this));
};
require('util').inherits(PromiseClientTls, jayson.Client.tls);

module.exports = PromiseClientTls;
