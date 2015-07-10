var invert = require('invert-obj');

function PaymentStreamRateIndexLevel (paymentStreamRateIndexLevel) {
  this.message = paymentStreamRateIndexLevel;
}

PaymentStreamRateIndexLevel.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexLevel.Tag = '41197';

PaymentStreamRateIndexLevel.Type = 'QTY';

module.exports = PaymentStreamRateIndexLevel;