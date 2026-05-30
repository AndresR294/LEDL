"use strict";

var toPosInt          = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/number/to-pos-integer")
  , value             = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/valid-value")
  , objHasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function () {
	var i, length;
	if (!(length = toPosInt(value(this).length))) return null;
	i = length - 1;
	while (!objHasOwnProperty.call(this, i)) {
		if (--i === -1) return null;
	}
	return i;
};
