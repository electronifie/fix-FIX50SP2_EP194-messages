var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentRollConvention (underlyingPaymentStreamPaymentRollConvention) {
  this.message = underlyingPaymentStreamPaymentRollConvention;
}

UnderlyingPaymentStreamPaymentRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentRollConvention.Tag = '40585';

UnderlyingPaymentStreamPaymentRollConvention.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPaymentRollConvention;