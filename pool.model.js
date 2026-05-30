"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBalance = void 0;
const calculation_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/calculation");
const constants_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/calculation/constants");
class UserBalance {
    lpAmount;
    rewardDebt;
    constructor(userInfo) {
        this.lpAmount = userInfo.lpAmount;
        this.rewardDebt = userInfo.rewardDebt;
    }
    get userLiquidity() {
        return (0, calculation_1.convertIntAmountToFloat)(this.lpAmount, constants_1.SYSTEM_PRECISION).toFixed();
    }
    earned(poolInfo, decimals) {
        const earned = (0, calculation_1.getEarned)(this.lpAmount, this.rewardDebt, poolInfo.accRewardPerShareP, poolInfo.p);
        if (decimals) {
            return (0, calculation_1.convertIntAmountToFloat)(earned, decimals).toFixed();
        }
        return earned;
    }
}
exports.UserBalance = UserBalance;
//# sourceMappingURL=pool.model.js.map