var invert = require('invert-obj');

function PaymentStreamRateSpreadCurrency (paymentStreamRateSpreadCurrency) {
  this.message = paymentStreamRateSpreadCurrency;
}

PaymentStreamRateSpreadCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamRateSpreadCurrency.Tag = '41203';

PaymentStreamRateSpreadCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamRateSpreadCurrency;