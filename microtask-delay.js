"use strict";

var ensurePlainFunction = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/ensure-plain-function")
  , defineLength        = require("../_define-length")
  , nextTick            = require("next-tick");

var apply = Function.prototype.apply;

module.exports = function () {
	var src = ensurePlainFunction(this);
	return defineLength(function () { nextTick(apply.bind(src, this, arguments)); }, this.length);
};
