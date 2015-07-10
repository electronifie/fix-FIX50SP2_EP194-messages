var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentFrequencyUnit (underlyingPaymentStreamPaymentFrequencyUnit) {
  this.message = underlyingPaymentStreamPaymentFrequencyUnit;
}

UnderlyingPaymentStreamPaymentFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentFrequencyUnit.Tag = '40584';

UnderlyingPaymentStreamPaymentFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPaymentFrequencyUnit;