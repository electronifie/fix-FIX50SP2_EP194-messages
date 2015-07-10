var invert = require('invert-obj');

function PaymentStreamRateSpread (paymentStreamRateSpread) {
  this.message = paymentStreamRateSpread;
}

PaymentStreamRateSpread.prototype.value = function () {
  return this.message;
};

PaymentStreamRateSpread.Tag = '40794';

PaymentStreamRateSpread.Type = 'PRICEOFFSET';

module.exports = PaymentStreamRateSpread;