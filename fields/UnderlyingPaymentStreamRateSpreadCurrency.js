var invert = require('invert-obj');

function UnderlyingPaymentStreamRateSpreadCurrency (underlyingPaymentStreamRateSpreadCurrency) {
  this.message = underlyingPaymentStreamRateSpreadCurrency;
}

UnderlyingPaymentStreamRateSpreadCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateSpreadCurrency.Tag = '41920';

UnderlyingPaymentStreamRateSpreadCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamRateSpreadCurrency;