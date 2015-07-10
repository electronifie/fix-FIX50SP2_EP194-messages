var invert = require('invert-obj');

function UnderlyingPaymentStreamDelayIndicator (underlyingPaymentStreamDelayIndicator) {
  this.message = underlyingPaymentStreamDelayIndicator;
}

UnderlyingPaymentStreamDelayIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamDelayIndicator.Tag = '40570';

UnderlyingPaymentStreamDelayIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamDelayIndicator;