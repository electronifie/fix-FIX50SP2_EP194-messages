var invert = require('invert-obj');

function PaymentBusinessDayConvention (paymentBusinessDayConvention) {
  this.message = paymentBusinessDayConvention;
}

PaymentBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentBusinessDayConvention.Tag = '40220';

PaymentBusinessDayConvention.Type = 'INT';

module.exports = PaymentBusinessDayConvention;