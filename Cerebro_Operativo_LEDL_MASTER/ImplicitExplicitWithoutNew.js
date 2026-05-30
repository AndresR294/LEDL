'use strict';

const withIs = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/..');

function ImplicitExplicitWithoutNew_() {
    /* istanbul ignore if */
    if (!(this instanceof ImplicitExplicitWithoutNew)) {
        return new ImplicitExplicitWithoutNew();
    }

    this.label = 'ImplicitExplicitWithoutNew';
}

ImplicitExplicitWithoutNew_.prototype.getLabel = function () {
    return this.label;
};

const ImplicitExplicitWithoutNew = withIs.proto(ImplicitExplicitWithoutNew_, {
    className: 'ImplicitExplicitWithoutNew',
    symbolName: '@org/package/ImplicitExplicitWithoutNew',
    withoutNew: true,
});

module.exports = ImplicitExplicitWithoutNew;
module.exports.WrappedClass = ImplicitExplicitWithoutNew_;
