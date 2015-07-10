var invert = require('invert-obj');

function UnderlyingDeliveryScheduleNotionalUnitOfMeasure (underlyingDeliveryScheduleNotionalUnitOfMeasure) {
  this.message = underlyingDeliveryScheduleNotionalUnitOfMeasure;
}

UnderlyingDeliveryScheduleNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleNotionalUnitOfMeasure.Tag = '41760';

UnderlyingDeliveryScheduleNotionalUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingDeliveryScheduleNotionalUnitOfMeasure;