var invert = require('invert-obj');

function DeliveryStreamToleranceUnitOfMeasure (deliveryStreamToleranceUnitOfMeasure) {
  this.message = deliveryStreamToleranceUnitOfMeasure;
}

DeliveryStreamToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

DeliveryStreamToleranceUnitOfMeasure.Tag = '41073';

DeliveryStreamToleranceUnitOfMeasure.Type = 'STRING';

module.exports = DeliveryStreamToleranceUnitOfMeasure;