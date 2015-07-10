var invert = require('invert-obj');

function LegPaymentStreamRateSpreadUnitOfMeasure (legPaymentStreamRateSpreadUnitOfMeasure) {
  this.message = legPaymentStreamRateSpreadUnitOfMeasure;
}

LegPaymentStreamRateSpreadUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateSpreadUnitOfMeasure.Tag = '41573';

LegPaymentStreamRateSpreadUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentStreamRateSpreadUnitOfMeasure;