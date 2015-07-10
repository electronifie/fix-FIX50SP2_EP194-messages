var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateAdjusted (underlyingPaymentStreamFixingDateAdjusted) {
  this.message = underlyingPaymentStreamFixingDateAdjusted;
}

UnderlyingPaymentStreamFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateAdjusted.Tag = '40611';

UnderlyingPaymentStreamFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamFixingDateAdjusted;