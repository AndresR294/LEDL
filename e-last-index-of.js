"use strict";

var numberIsNaN       = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/number/is-nan")
  , toPosInt          = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/number/to-pos-integer")
  , value             = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/valid-value")
  , lastIndexOf       = Array.prototype.lastIndexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs               = Math.abs
  , floor             = Math.floor;

module.exports = function (searchElement /*, fromIndex*/) {
	var i, fromIndex, val;
	if (!numberIsNaN(searchElement)) {
		// Jslint: ignore
		return lastIndexOf.apply(this, arguments);
	}

	value(this);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = toPosInt(this.length) - 1;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i >= 0; --i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (numberIsNaN(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};
