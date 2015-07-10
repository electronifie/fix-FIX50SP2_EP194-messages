var invert = require('invert-obj');

function PaymentStreamWorldScaleRate (paymentStreamWorldScaleRate) {
  this.message = paymentStreamWorldScaleRate;
}

PaymentStreamWorldScaleRate.prototype.value = function () {
  return this.message;
};

PaymentStreamWorldScaleRate.Tag = '41189';

PaymentStreamWorldScaleRate.Type = 'FLOAT';

module.exports = PaymentStreamWorldScaleRate;