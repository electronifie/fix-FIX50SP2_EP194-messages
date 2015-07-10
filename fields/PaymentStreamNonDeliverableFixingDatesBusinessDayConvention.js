var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesBusinessDayConvention (paymentStreamNonDeliverableFixingDatesBusinessDayConvention) {
  this.message = paymentStreamNonDeliverableFixingDatesBusinessDayConvention;
}

PaymentStreamNonDeliverableFixingDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag = '40818';

PaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Type = 'INT';

module.exports = PaymentStreamNonDeliverableFixingDatesBusinessDayConvention;