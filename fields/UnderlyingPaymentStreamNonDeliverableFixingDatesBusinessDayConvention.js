var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention (underlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag = '40649';

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention;