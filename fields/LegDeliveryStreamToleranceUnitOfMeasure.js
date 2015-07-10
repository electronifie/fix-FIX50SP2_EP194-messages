var invert = require('invert-obj');

function LegDeliveryStreamToleranceUnitOfMeasure (legDeliveryStreamToleranceUnitOfMeasure) {
  this.message = legDeliveryStreamToleranceUnitOfMeasure;
}

LegDeliveryStreamToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamToleranceUnitOfMeasure.Tag = '41444';

LegDeliveryStreamToleranceUnitOfMeasure.Type = 'STRING';

module.exports = LegDeliveryStreamToleranceUnitOfMeasure;