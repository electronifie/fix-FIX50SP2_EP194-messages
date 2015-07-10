var invert = require('invert-obj');

function UnderlyingPaymentStreamFixedAmount (underlyingPaymentStreamFixedAmount) {
  this.message = underlyingPaymentStreamFixedAmount;
}

UnderlyingPaymentStreamFixedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixedAmount.Tag = '40616';

UnderlyingPaymentStreamFixedAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStreamFixedAmount;