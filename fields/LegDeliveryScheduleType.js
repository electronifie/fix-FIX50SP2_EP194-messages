var invert = require('invert-obj');

function LegDeliveryScheduleType (legDeliveryScheduleType) {
  this.message = legDeliveryScheduleType;
}

LegDeliveryScheduleType.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleType.Tag = '41409';

LegDeliveryScheduleType.Type = 'INT';

module.exports = LegDeliveryScheduleType;