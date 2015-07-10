var invert = require('invert-obj');

function UnderlyingPaymentStreamRateCutoffOffsetDayType (underlyingPaymentStreamRateCutoffOffsetDayType) {
  this.message = underlyingPaymentStreamRateCutoffOffsetDayType;
}

UnderlyingPaymentStreamRateCutoffOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateCutoffOffsetDayType.Tag = '40614';

UnderlyingPaymentStreamRateCutoffOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateCutoffOffsetDayType;