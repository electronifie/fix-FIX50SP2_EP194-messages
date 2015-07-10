var invert = require('invert-obj');

function PaymentStreamFixingDateOffsetPeriod (paymentStreamFixingDateOffsetPeriod) {
  this.message = paymentStreamFixingDateOffsetPeriod;
}

PaymentStreamFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateOffsetPeriod.Tag = '40777';

PaymentStreamFixingDateOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamFixingDateOffsetPeriod;