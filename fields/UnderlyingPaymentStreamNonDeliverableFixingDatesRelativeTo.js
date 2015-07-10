var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo (underlyingPaymentStreamNonDeliverableFixingDatesRelativeTo) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesRelativeTo;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo.Tag = '40651';

UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo;