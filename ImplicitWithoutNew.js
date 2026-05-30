'use strict';

const withIs = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/..');

function ImplicitWithoutNew() {
    this.label = 'ImplicitWithoutNew';
}

ImplicitWithoutNew.prototype.getLabel = function () {
    return this.label;
};

module.exports = withIs.proto(ImplicitWithoutNew, {
    className: 'ImplicitWithoutNew',
    symbolName: '@org/package/ImplicitWithoutNew',
    withoutNew: true,
});
module.exports.WrappedClass = ImplicitWithoutNew;
