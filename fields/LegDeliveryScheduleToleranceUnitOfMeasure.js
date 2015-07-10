var invert = require('invert-obj');

function LegDeliveryScheduleToleranceUnitOfMeasure (legDeliveryScheduleToleranceUnitOfMeasure) {
  this.message = legDeliveryScheduleToleranceUnitOfMeasure;
}

LegDeliveryScheduleToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleToleranceUnitOfMeasure.Tag = '41416';

LegDeliveryScheduleToleranceUnitOfMeasure.Type = 'STRING';

module.exports = LegDeliveryScheduleToleranceUnitOfMeasure;