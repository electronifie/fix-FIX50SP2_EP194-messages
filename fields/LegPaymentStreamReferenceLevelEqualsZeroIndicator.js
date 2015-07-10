var invert = require('invert-obj');

function LegPaymentStreamReferenceLevelEqualsZeroIndicator (legPaymentStreamReferenceLevelEqualsZeroIndicator) {
  this.message = legPaymentStreamReferenceLevelEqualsZeroIndicator;
}

LegPaymentStreamReferenceLevelEqualsZeroIndicator.prototype.value = function () {
  return this.message;
};

LegPaymentStreamReferenceLevelEqualsZeroIndicator.Tag = '41571';

LegPaymentStreamReferenceLevelEqualsZeroIndicator.Type = 'BOOLEAN';

module.exports = LegPaymentStreamReferenceLevelEqualsZeroIndicator;