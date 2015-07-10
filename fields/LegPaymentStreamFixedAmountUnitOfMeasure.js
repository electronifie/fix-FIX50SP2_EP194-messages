var invert = require('invert-obj');

function LegPaymentStreamFixedAmountUnitOfMeasure (legPaymentStreamFixedAmountUnitOfMeasure) {
  this.message = legPaymentStreamFixedAmountUnitOfMeasure;
}

LegPaymentStreamFixedAmountUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixedAmountUnitOfMeasure.Tag = '41556';

LegPaymentStreamFixedAmountUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentStreamFixedAmountUnitOfMeasure;