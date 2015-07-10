var invert = require('invert-obj');

function UnderlyingPaymentStreamRateCutoffOffsetUnit (underlyingPaymentStreamRateCutoffOffsetUnit) {
  this.message = underlyingPaymentStreamRateCutoffOffsetUnit;
}

UnderlyingPaymentStreamRateCutoffOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateCutoffOffsetUnit.Tag = '40613';

UnderlyingPaymentStreamRateCutoffOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateCutoffOffsetUnit;