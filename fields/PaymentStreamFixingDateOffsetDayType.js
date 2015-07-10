var invert = require('invert-obj');

function PaymentStreamFixingDateOffsetDayType (paymentStreamFixingDateOffsetDayType) {
  this.message = paymentStreamFixingDateOffsetDayType;
}

PaymentStreamFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentStreamFixingDateOffsetDayType.Tag = '40779';

PaymentStreamFixingDateOffsetDayType.Type = 'INT';

module.exports = PaymentStreamFixingDateOffsetDayType;