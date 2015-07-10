var invert = require('invert-obj');

function PaymentStreamInitialFixingDateOffsetDayType (paymentStreamInitialFixingDateOffsetDayType) {
  this.message = paymentStreamInitialFixingDateOffsetDayType;
}

PaymentStreamInitialFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialFixingDateOffsetDayType.Tag = '40772';

PaymentStreamInitialFixingDateOffsetDayType.Type = 'INT';

module.exports = PaymentStreamInitialFixingDateOffsetDayType;