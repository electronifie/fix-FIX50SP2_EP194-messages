var invert = require('invert-obj');

function UnderlyingPaymentStreamResetFrequencyUnit (underlyingPaymentStreamResetFrequencyUnit) {
  this.message = underlyingPaymentStreamResetFrequencyUnit;
}

UnderlyingPaymentStreamResetFrequencyUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetFrequencyUnit.Tag = '40596';

UnderlyingPaymentStreamResetFrequencyUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamResetFrequencyUnit;