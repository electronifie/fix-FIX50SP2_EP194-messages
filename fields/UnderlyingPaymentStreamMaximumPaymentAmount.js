var invert = require('invert-obj');

function UnderlyingPaymentStreamMaximumPaymentAmount (underlyingPaymentStreamMaximumPaymentAmount) {
  this.message = underlyingPaymentStreamMaximumPaymentAmount;
}

UnderlyingPaymentStreamMaximumPaymentAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMaximumPaymentAmount.Tag = '41900';

UnderlyingPaymentStreamMaximumPaymentAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStreamMaximumPaymentAmount;