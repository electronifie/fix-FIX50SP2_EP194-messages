var invert = require('invert-obj');

function LegPaymentStreamRateIndexUnitOfMeasure (legPaymentStreamRateIndexUnitOfMeasure) {
  this.message = legPaymentStreamRateIndexUnitOfMeasure;
}

LegPaymentStreamRateIndexUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateIndexUnitOfMeasure.Tag = '41567';

LegPaymentStreamRateIndexUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentStreamRateIndexUnitOfMeasure;