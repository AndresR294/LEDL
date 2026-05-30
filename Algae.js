'use strict';

const withIs = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/..');
const Plant = require('./Plant');

function Algae() {
    Plant.call(this, 'algae');
}

Algae.prototype = Object.create(Plant.prototype);
Algae.prototype.constructor = Algae;

module.exports = withIs.proto(Algae, {
    className: 'Algae',
    symbolName: '@org/package/Algae',
});
module.exports.WrappedClass = Algae;
