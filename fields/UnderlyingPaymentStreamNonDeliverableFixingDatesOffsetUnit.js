var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit (underlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag = '40653';

UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit;