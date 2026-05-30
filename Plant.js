'use strict';

const withIs = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/..');

function Plant(type) {
    this.type = type;
}

Plant.prototype.getType = function () {
    return this.type;
};

module.exports = withIs.proto(Plant, {
    className: 'Plant',
    symbolName: '@org/package/Plant',
});
module.exports.WrappedClass = Plant;
