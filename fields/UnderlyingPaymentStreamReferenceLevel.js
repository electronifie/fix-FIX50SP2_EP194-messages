var invert = require('invert-obj');

function UnderlyingPaymentStreamReferenceLevel (underlyingPaymentStreamReferenceLevel) {
  this.message = underlyingPaymentStreamReferenceLevel;
}

UnderlyingPaymentStreamReferenceLevel.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamReferenceLevel.Tag = '41917';

UnderlyingPaymentStreamReferenceLevel.Type = 'QTY';

module.exports = UnderlyingPaymentStreamReferenceLevel;