var invert = require('invert-obj');

function UnderlyingDeliveryScheduleToleranceType (underlyingDeliveryScheduleToleranceType) {
  this.message = underlyingDeliveryScheduleToleranceType;
}

UnderlyingDeliveryScheduleToleranceType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleToleranceType.Tag = '41765';

UnderlyingDeliveryScheduleToleranceType.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleToleranceType;