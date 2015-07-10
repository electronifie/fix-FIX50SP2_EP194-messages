var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateOffsetDayType (underlyingPaymentStreamFixingDateOffsetDayType) {
  this.message = underlyingPaymentStreamFixingDateOffsetDayType;
}

UnderlyingPaymentStreamFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateOffsetDayType.Tag = '40610';

UnderlyingPaymentStreamFixingDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamFixingDateOffsetDayType;