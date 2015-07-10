var invert = require('invert-obj');

function UnderlyingPaymentStreamTotalFixedAmount (underlyingPaymentStreamTotalFixedAmount) {
  this.message = underlyingPaymentStreamTotalFixedAmount;
}

UnderlyingPaymentStreamTotalFixedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamTotalFixedAmount.Tag = '41905';

UnderlyingPaymentStreamTotalFixedAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStreamTotalFixedAmount;