var invert = require('invert-obj');

function UnderlyingDeliveryStreamToleranceUnitOfMeasure (underlyingDeliveryStreamToleranceUnitOfMeasure) {
  this.message = underlyingDeliveryStreamToleranceUnitOfMeasure;
}

UnderlyingDeliveryStreamToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamToleranceUnitOfMeasure.Tag = '41792';

UnderlyingDeliveryStreamToleranceUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamToleranceUnitOfMeasure;