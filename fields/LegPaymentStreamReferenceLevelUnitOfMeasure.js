var invert = require('invert-obj');

function LegPaymentStreamReferenceLevelUnitOfMeasure (legPaymentStreamReferenceLevelUnitOfMeasure) {
  this.message = legPaymentStreamReferenceLevelUnitOfMeasure;
}

LegPaymentStreamReferenceLevelUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentStreamReferenceLevelUnitOfMeasure.Tag = '41570';

LegPaymentStreamReferenceLevelUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentStreamReferenceLevelUnitOfMeasure;