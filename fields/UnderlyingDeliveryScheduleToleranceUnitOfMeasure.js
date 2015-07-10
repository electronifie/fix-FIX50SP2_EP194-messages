var invert = require('invert-obj');

function UnderlyingDeliveryScheduleToleranceUnitOfMeasure (underlyingDeliveryScheduleToleranceUnitOfMeasure) {
  this.message = underlyingDeliveryScheduleToleranceUnitOfMeasure;
}

UnderlyingDeliveryScheduleToleranceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleToleranceUnitOfMeasure.Tag = '41764';

UnderlyingDeliveryScheduleToleranceUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingDeliveryScheduleToleranceUnitOfMeasure;