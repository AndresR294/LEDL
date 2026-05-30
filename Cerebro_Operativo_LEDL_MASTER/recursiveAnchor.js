"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicAnchor_1 = require("./dynamicAnchor");
const util_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/compile/util");
const def = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(cxt) {
        if (cxt.schema)
            (0, dynamicAnchor_1.dynamicAnchor)(cxt, "");
        else
            (0, util_1.checkStrictMode)(cxt.it, "$recursiveAnchor: false is ignored");
    },
};
exports.default = def;
//# sourceMappingURL=recursiveAnchor.js.map