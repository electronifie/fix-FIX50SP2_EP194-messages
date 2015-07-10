var invert = require('invert-obj');

function UnderlyingPaymentStreamFlatRateAmount (underlyingPaymentStreamFlatRateAmount) {
  this.message = underlyingPaymentStreamFlatRateAmount;
}

UnderlyingPaymentStreamFlatRateAmount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFlatRateAmount.Tag = '41898';

UnderlyingPaymentStreamFlatRateAmount.Type = 'AMT';

module.exports = UnderlyingPaymentStreamFlatRateAmount;