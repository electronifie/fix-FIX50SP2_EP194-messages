var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateOffsetPeriod (underlyingPaymentStreamInitialFixingDateOffsetPeriod) {
  this.message = underlyingPaymentStreamInitialFixingDateOffsetPeriod;
}

UnderlyingPaymentStreamInitialFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateOffsetPeriod.Tag = '40601';

UnderlyingPaymentStreamInitialFixingDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamInitialFixingDateOffsetPeriod;