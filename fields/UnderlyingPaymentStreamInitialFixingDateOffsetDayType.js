var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateOffsetDayType (underlyingPaymentStreamInitialFixingDateOffsetDayType) {
  this.message = underlyingPaymentStreamInitialFixingDateOffsetDayType;
}

UnderlyingPaymentStreamInitialFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateOffsetDayType.Tag = '40603';

UnderlyingPaymentStreamInitialFixingDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamInitialFixingDateOffsetDayType;