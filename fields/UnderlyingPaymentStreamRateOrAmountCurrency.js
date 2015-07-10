var invert = require('invert-obj');

function UnderlyingPaymentStreamRateOrAmountCurrency (underlyingPaymentStreamRateOrAmountCurrency) {
  this.message = underlyingPaymentStreamRateOrAmountCurrency;
}

UnderlyingPaymentStreamRateOrAmountCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateOrAmountCurrency.Tag = '40617';

UnderlyingPaymentStreamRateOrAmountCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamRateOrAmountCurrency;