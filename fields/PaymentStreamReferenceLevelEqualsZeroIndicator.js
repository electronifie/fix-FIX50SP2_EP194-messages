var invert = require('invert-obj');

function PaymentStreamReferenceLevelEqualsZeroIndicator (paymentStreamReferenceLevelEqualsZeroIndicator) {
  this.message = paymentStreamReferenceLevelEqualsZeroIndicator;
}

PaymentStreamReferenceLevelEqualsZeroIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamReferenceLevelEqualsZeroIndicator.Tag = '41202';

PaymentStreamReferenceLevelEqualsZeroIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamReferenceLevelEqualsZeroIndicator;