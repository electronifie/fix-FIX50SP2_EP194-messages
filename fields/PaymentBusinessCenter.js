var invert = require('invert-obj');

function PaymentBusinessCenter (paymentBusinessCenter) {
  this.message = paymentBusinessCenter;
}

PaymentBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentBusinessCenter.Tag = '40221';

PaymentBusinessCenter.Type = 'STRING';

module.exports = PaymentBusinessCenter;