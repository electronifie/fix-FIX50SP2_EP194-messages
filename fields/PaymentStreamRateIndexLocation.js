var invert = require('invert-obj');

function PaymentStreamRateIndexLocation (paymentStreamRateIndexLocation) {
  this.message = paymentStreamRateIndexLocation;
}

PaymentStreamRateIndexLocation.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexLocation.Tag = '41196';

PaymentStreamRateIndexLocation.Type = 'STRING';

module.exports = PaymentStreamRateIndexLocation;