var invert = require('invert-obj');

function DeliveryScheduleToleranceUnitOfMeasure (deliveryScheduleToleranceUnitOfMeasure) {
  this.message = deliveryScheduleToleranceUnitOfMeasure;
}

DeliveryScheduleToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

DeliveryScheduleToleranceUnitOfMeasure.Tag = '41045';

DeliveryScheduleToleranceUnitOfMeasure.Type = 'STRING';

module.exports = DeliveryScheduleToleranceUnitOfMeasure;