var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateAdjusted (underlyingPaymentStreamInitialFixingDateAdjusted) {
  this.message = underlyingPaymentStreamInitialFixingDateAdjusted;
}

UnderlyingPaymentStreamInitialFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateAdjusted.Tag = '40604';

UnderlyingPaymentStreamInitialFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamInitialFixingDateAdjusted;