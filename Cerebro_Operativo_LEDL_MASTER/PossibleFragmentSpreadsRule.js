'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;

var _inspect = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/jsutils/inspect.js');

var _GraphQLError = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/error/GraphQLError.js');

var _definition = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/type/definition.js');

var _typeComparators = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utilities/typeComparators.js');

var _typeFromAST = require('/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utilities/typeFromAST.js');

/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreadsRule(context) {
  return {
    InlineFragment(node) {
      const fragType = context.getType();
      const parentType = context.getParentType();

      if (
        (0, _definition.isCompositeType)(fragType) &&
        (0, _definition.isCompositeType)(parentType) &&
        !(0, _typeComparators.doTypesOverlap)(
          context.getSchema(),
          fragType,
          parentType,
        )
      ) {
        const parentTypeStr = (0, _inspect.inspect)(parentType);
        const fragTypeStr = (0, _inspect.inspect)(fragType);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
            {
              nodes: node,
            },
          ),
        );
      }
    },

    FragmentSpread(node) {
      const fragName = node.name.value;
      const fragType = getFragmentType(context, fragName);
      const parentType = context.getParentType();

      if (
        fragType &&
        parentType &&
        !(0, _typeComparators.doTypesOverlap)(
          context.getSchema(),
          fragType,
          parentType,
        )
      ) {
        const parentTypeStr = (0, _inspect.inspect)(parentType);
        const fragTypeStr = (0, _inspect.inspect)(fragType);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
            {
              nodes: node,
            },
          ),
        );
      }
    },
  };
}

function getFragmentType(context, name) {
  const frag = context.getFragment(name);

  if (frag) {
    const type = (0, _typeFromAST.typeFromAST)(
      context.getSchema(),
      frag.typeCondition,
    );

    if ((0, _definition.isCompositeType)(type)) {
      return type;
    }
  }
}
