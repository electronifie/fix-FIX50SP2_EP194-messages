var invert = require('invert-obj');

function UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator (underlyingPaymentStreamReferenceLevelEqualsZeroIndicator) {
  this.message = underlyingPaymentStreamReferenceLevelEqualsZeroIndicator;
}

UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator.Tag = '41919';

UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator;