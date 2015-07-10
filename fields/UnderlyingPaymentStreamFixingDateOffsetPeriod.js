var invert = require('invert-obj');

function UnderlyingPaymentStreamFixingDateOffsetPeriod (underlyingPaymentStreamFixingDateOffsetPeriod) {
  this.message = underlyingPaymentStreamFixingDateOffsetPeriod;
}

UnderlyingPaymentStreamFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixingDateOffsetPeriod.Tag = '40608';

UnderlyingPaymentStreamFixingDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamFixingDateOffsetPeriod;