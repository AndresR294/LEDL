"use strict";

var isValue = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/is-value")
  , repeat  = require("./repeat")
  , replace = String.prototype.replace
  , re      = /(\r\n|[\n\r\u2028\u2029])([\u0000-\u0009\u000b-\uffff]+)/g;

module.exports = function (indent /*, count*/) {
	var count = arguments[1];
	indent = repeat.call(String(indent), isValue(count) ? count : 1);
	return indent + replace.call(this, re, "$1" + indent + "$2");
};
