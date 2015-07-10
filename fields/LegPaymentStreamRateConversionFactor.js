var invert = require('invert-obj');

function LegPaymentStreamRateConversionFactor (legPaymentStreamRateConversionFactor) {
  this.message = legPaymentStreamRateConversionFactor;
}

LegPaymentStreamRateConversionFactor.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateConversionFactor.Tag = '41574';

LegPaymentStreamRateConversionFactor.Type = 'FLOAT';

module.exports = LegPaymentStreamRateConversionFactor;