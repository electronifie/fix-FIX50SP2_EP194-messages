var invert = require('invert-obj');

function UnderlyingPaymentStreamRateCutoffOffsetPeriod (underlyingPaymentStreamRateCutoffOffsetPeriod) {
  this.message = underlyingPaymentStreamRateCutoffOffsetPeriod;
}

UnderlyingPaymentStreamRateCutoffOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateCutoffOffsetPeriod.Tag = '40612';

UnderlyingPaymentStreamRateCutoffOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateCutoffOffsetPeriod;