"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/compile/util");
const def = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword, parentSchema, it }) {
        if (parentSchema.contains === undefined) {
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "contains" is ignored`);
        }
    },
};
exports.default = def;
//# sourceMappingURL=limitContains.js.map