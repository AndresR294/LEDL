// Used internally to sort array of lists by length

"use strict";

var toPosInt = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/number/to-pos-integer");

module.exports = function (arr1, arr2) { return toPosInt(arr1.length) - toPosInt(arr2.length); };
