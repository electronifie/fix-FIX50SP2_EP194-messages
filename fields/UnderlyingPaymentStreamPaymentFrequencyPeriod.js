var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentFrequencyPeriod (underlyingPaymentStreamPaymentFrequencyPeriod) {
  this.message = underlyingPaymentStreamPaymentFrequencyPeriod;
}

UnderlyingPaymentStreamPaymentFrequencyPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentFrequencyPeriod.Tag = '40583';

UnderlyingPaymentStreamPaymentFrequencyPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentFrequencyPeriod;