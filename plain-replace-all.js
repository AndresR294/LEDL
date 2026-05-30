"use strict";

var value = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/object/valid-value");

module.exports = function (search, replace) {
	var index, pos = 0, str = String(value(this)), sl, rl;
	search = String(search);
	replace = String(replace);
	sl = search.length;
	rl = replace.length;
	while ((index = str.indexOf(search, pos)) !== -1) {
		str = str.slice(0, index) + replace + str.slice(index + sl);
		pos = index + rl;
	}
	return str;
};
