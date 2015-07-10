var invert = require('invert-obj');

function PaymentDateOffsetPeriod (paymentDateOffsetPeriod) {
  this.message = paymentDateOffsetPeriod;
}

PaymentDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentDateOffsetPeriod.Tag = '41157';

PaymentDateOffsetPeriod.Type = 'INT';

module.exports = PaymentDateOffsetPeriod;