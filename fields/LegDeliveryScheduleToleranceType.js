var invert = require('invert-obj');

function LegDeliveryScheduleToleranceType (legDeliveryScheduleToleranceType) {
  this.message = legDeliveryScheduleToleranceType;
}

LegDeliveryScheduleToleranceType.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleToleranceType.Tag = '41417';

LegDeliveryScheduleToleranceType.Type = 'INT';

module.exports = LegDeliveryScheduleToleranceType;