var invert = require('invert-obj');

function UnderlyingPaymentStreamResetFrequencyPeriod (underlyingPaymentStreamResetFrequencyPeriod) {
  this.message = underlyingPaymentStreamResetFrequencyPeriod;
}

UnderlyingPaymentStreamResetFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetFrequencyPeriod.Tag = '40595';

UnderlyingPaymentStreamResetFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamResetFrequencyPeriod;