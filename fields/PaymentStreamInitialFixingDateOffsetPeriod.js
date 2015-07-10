var invert = require('invert-obj');

function PaymentStreamInitialFixingDateOffsetPeriod (paymentStreamInitialFixingDateOffsetPeriod) {
  this.message = paymentStreamInitialFixingDateOffsetPeriod;
}

PaymentStreamInitialFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateOffsetPeriod.Tag = '40770';

PaymentStreamInitialFixingDateOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamInitialFixingDateOffsetPeriod;