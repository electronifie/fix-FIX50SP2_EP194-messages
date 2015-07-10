var invert = require('invert-obj');

function UnderlyingPaymentStreamFlatRateCurrency (underlyingPaymentStreamFlatRateCurrency) {
  this.message = underlyingPaymentStreamFlatRateCurrency;
}

UnderlyingPaymentStreamFlatRateCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFlatRateCurrency.Tag = '41899';

UnderlyingPaymentStreamFlatRateCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamFlatRateCurrency;