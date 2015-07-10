var invert = require('invert-obj');

function DeliveryScheduleNotionalUnitOfMeasure (deliveryScheduleNotionalUnitOfMeasure) {
  this.message = deliveryScheduleNotionalUnitOfMeasure;
}

DeliveryScheduleNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

DeliveryScheduleNotionalUnitOfMeasure.Tag = '41041';

DeliveryScheduleNotionalUnitOfMeasure.Type = 'STRING';

module.exports = DeliveryScheduleNotionalUnitOfMeasure;