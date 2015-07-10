var invert = require('invert-obj');

function LegDeliveryScheduleNotionalUnitOfMeasure (legDeliveryScheduleNotionalUnitOfMeasure) {
  this.message = legDeliveryScheduleNotionalUnitOfMeasure;
}

LegDeliveryScheduleNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleNotionalUnitOfMeasure.Tag = '41412';

LegDeliveryScheduleNotionalUnitOfMeasure.Type = 'STRING';

module.exports = LegDeliveryScheduleNotionalUnitOfMeasure;