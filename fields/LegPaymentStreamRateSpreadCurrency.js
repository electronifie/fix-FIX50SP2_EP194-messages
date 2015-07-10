var invert = require('invert-obj');

function LegPaymentStreamRateSpreadCurrency (legPaymentStreamRateSpreadCurrency) {
  this.message = legPaymentStreamRateSpreadCurrency;
}

LegPaymentStreamRateSpreadCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateSpreadCurrency.Tag = '41572';

LegPaymentStreamRateSpreadCurrency.Type = 'CURRENCY';

module.exports = LegPaymentStreamRateSpreadCurrency;