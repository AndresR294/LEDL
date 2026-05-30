"use strict";

var ensureStringifiable = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/validate-stringifiable-value");

module.exports = function () {
	var str = ensureStringifiable(this);
	return str.charAt(0).toLowerCase() + str.slice(1);
};
