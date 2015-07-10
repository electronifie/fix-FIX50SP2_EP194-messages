var invert = require('invert-obj');

function LegSwapClass (legSwapClass) {
  this.message = legSwapClass;
}

LegSwapClass.prototype.value = function () {
  return this.message;
};

LegSwapClass.Tag = '2070';

LegSwapClass.Type = 'STRING';

module.exports = LegSwapClass;