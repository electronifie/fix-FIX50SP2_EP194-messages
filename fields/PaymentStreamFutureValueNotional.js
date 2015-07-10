var invert = require('invert-obj');

function PaymentStreamFutureValueNotional (paymentStreamFutureValueNotional) {
  this.message = paymentStreamFutureValueNotional;
}

PaymentStreamFutureValueNotional.prototype.value = function () {
  return this.message;
};

PaymentStreamFutureValueNotional.Tag = '40787';

PaymentStreamFutureValueNotional.Type = 'AMT';

module.exports = PaymentStreamFutureValueNotional;