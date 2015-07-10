var invert = require('invert-obj');

function PaymentStreamInflationInitialIndexLevel (paymentStreamInflationInitialIndexLevel) {
  this.message = paymentStreamInflationInitialIndexLevel;
}

PaymentStreamInflationInitialIndexLevel.prototype.value = function () {
  return this.message;
};

PaymentStreamInflationInitialIndexLevel.Tag = '40814';

PaymentStreamInflationInitialIndexLevel.Type = 'FLOAT';

module.exports = PaymentStreamInflationInitialIndexLevel;